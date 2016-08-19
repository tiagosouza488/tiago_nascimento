globalServices.service('FileSystem', function() { //Antigo fileSystemSingleton

  this.fileSystem = false,

  this.load = function(callback, fail) {
  	//Aloca espaco persistente mas se nao der pega temporario mesmo (p/ browser)
  	try {
  		var tmp = LocalFileSystem.PERSISTENT;
  		var tmp = null;
  	} catch(e) {
  		try{
  			var LocalFileSystem = { PERSISTENT: window.PERSISTENT, TEMPORARY: window.TEMPORARY };
  			window.requestFileSystem  = window.requestFileSystem || window.webkitRequestFileSystem;
  		}catch(ee){
  			var LocalFileSystem = { PERSISTENT: window.parent.PERSISTENT, TEMPORARY: window.parent.TEMPORARY };
  			window.parent.requestFileSystem  = window.parent.requestFileSystem || window.parent.webkitRequestFileSystem;
  		}
  	}

  	if (this.fileSystem) {
  		callback(this.fileSystem);
  		return;
    	}

    	if (!window.requestFileSystem){
  		return fail();
  	}

  	try{
  		window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSystem) {
  			this.fileSystem = fileSystem;
  			callback(fileSystem);
  		},
  		function(err) {
  			fail(err);
  		});
  	}catch(err){
  		dbg("FileSystem","load")("Erro alocando filesystem: "+err);
  	}
  };

});

globalServices.service('DirManager', ['FileSystem',function(FileSystem) {
  this.cache = {};
  var current_object = this;
  // recursive create
  this.get_home_path = function(callback) {
    FileSystem.load(function(fileSystem) {
      callback(fileSystem.root.nativeURL);
    });
  };

  this.create_r = function(path, callback, fail, position) {
    position = (typeof position == 'undefined')? 0: position;
    var path_split 		= path.split('/');
    var new_position 	= position+1;
    var sub_path 		= path_split.slice(0,new_position).join('/');

    var inner_callback = function(obj) {
      return function() {
        obj.create_r(path, callback, fail, new_position);
      }
    };
    if (new_position == path_split.length){
		this.create(sub_path, callback, fail);
	}else{
		this.create(sub_path, inner_callback(this), fail);
	}

  };

  this.list = function(path, success, fail) {
    var template_callback = function(success) {
      return 	function(entries) {
        var i;
        var ret = [];
        limit = entries.length;

        for (i=0; i<limit; i++) {
            ret.push(entries[i]);
        }
        success(ret);
      }
    };

    if (current_object.cache[path]) {
      current_object.cache[path].readEntries( template_callback(success) );
      return;
    }

    FileSystem.load(function(fileSystem) {
      var entry=fileSystem.root;
      entry.getDirectory(path,
      { exclusive: false },
      function(entry) {
        var directoryReader = entry.createReader();
        current_object.cache[path] = directoryReader;
        directoryReader.readEntries(  template_callback(success)  );
      },
      function(err) {
        current_object.create_r(path,function(){success([]);},fail);
        dbg('DirManager','crete fail')('error creating directory');
        //fail(err);
      });
    });
  };

  this.create = function(path, callback, fail) {
	FileSystem.load(function(fileSystem) {
	    var entry = fileSystem.root;
        entry.getDirectory(path,
          {create: true, exclusive: false},
          function(entry){
            callback(entry);
          },
          function(err){
            dbg('DirManager','crete fail')('error creating directory');
            fail(err);
          });
      }
    );
  };

  this.remove = function(path, success, fail) {
    delete current_object.cache[path];
    this.create(path, function(entry) {
      entry.removeRecursively(success, fail);
    });
  };

}]);

globalServices.service('FileManager', ['FileSystem','DirManager',function(FileSystem,DirManager) {

	this.get_path = function(todir, tofilename, success) {
		this.load_file(todir, tofilename, function(fileEntry) {
	     var sPath = fileEntry.toURL();
       success(sPath);
		}, dbg('fail'));

	};

	this.load_file = function(dir, file, success, fail, dont_repeat) {
		if( !dir || dir == '') {
			dbg('error','msg')('No file should be created, without a folder, to prevent a mess');
			fail();
			return;
		}

		var full_file_path = dir+'/'+file;
		var object = this;

		//código necessário por causa da criação assíncrona de arquivos no phonegap
    FileSystem.load(function(fs) {
			var dont_repeat_inner = dont_repeat;
			//console.log(fs.root);
      var obj_options = {create: true, exclusive: false};

			fs.root.getFile(full_file_path, obj_options, success, function(error) {
				if (dont_repeat == true) {
					dbg('FileManager','error')('recurring error, gettingout of here!');
					return;
				}
				// se o diretório alvo não existe, cria ele
				if (error.name == 'NotFoundError') {
					dbg('FileManager','msg')('folder does not exist, creating it');

          DirManager.create_r(dir, function() {
						dbg('FileManager','mesg')('trying to create the file again: '+file);
						FileManager.load_file(dir,file,success,fail,true);
					}, fail);

          return;
				}
				fail(error);
			});

    });
	};

	this.download_file = function(url, todir, tofilename, success, fail) {
		this.load_file(todir, tofilename, function(fileEntry){
			var sPath = fileEntry.toURL();
      var fileTransfer = new FileTransfer();

      fileEntry.remove();

      fileTransfer.download( encodeURI(url), sPath, function(theFile) {
        //console.log("download complete: " + theFile.toURI());
        success(theFile);
      },
      function(error) {
        console.log("download error source " + error.source);
        console.log("download error target " + error.target);
        console.log("upload error code: " + error.code);
        fail(error);
      });
		},
    fail);
	};

	this.read_file = function(dir, filename, success, fail) {
		this.load_file(dir, filename,	function(fileEntry) {
			fileEntry.file(function(file) {
        var reader = new FileReader();
		    reader.onloadend = function(evt) {
	         success(evt.target.result);
				};
				reader.readAsText(file);
			},
			fail);
		},
		fail);

  };

	this.write_file = function(dir, filename, data, success, fail) {
		this.load_file(dir, filename, function(fileEntry) {

      fileEntry.createWriter(function(writer) {
        //dbg('FileManager','mesg')('writing to file: '+filename);
        writer.onwriteend = function(evt) {
					//dbg('FileManager','mesg')('file write success!');
					success(evt, fileEntry);
				}
        writer.write(data);
			}, fail);

    }, fail);
		//
	};

	this.remove_file = function(full_file_path, success, fail) {
		FileSystem.load(function(fs) {
		  fs.root.getFile(full_file_path, // get file handler
      {create: false, exclusive: false},
      function(fileEntry) {
        fileEntry.remove(success, fail);
      }, fail);
		});
	};

  this.move_file = function(filename, newDir, newFileName, success, fail) {
    FileSystem.load(function(fs) {
      fs.root.getDirectory(newDir,{create:true},
      function(destinationDir) {
        window.resolveLocalFileSystemURL(filename,function(fileSource){
          fileSource.moveTo(destinationDir, newFileName, success, fail);
        }, fail );
      });
    });
	};

}]);

///////////////////////
globalServices.service('TesteService', function() {
  this.json = {}; //deletar
})

globalServices.factory('BlankFactory', function(){

});
