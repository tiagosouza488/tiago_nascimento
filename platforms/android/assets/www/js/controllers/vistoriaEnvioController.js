globalCtrl.controller('enviarVistoriasCtrl', function($scope, $state, Database) {
    var vistorias = [];

    // antes de entrar na view atualiza as imagens com status OK
    $scope.$on('$ionicView.beforeEnter', function() {
        
        vistorias = Database.vistorias;

        if ( vistorias == null || vistorias.length < 1 ) {
            $scope.listaVazia = true;
        }
        else {
            vistorias.forEach( function (elemento, indice) {
                if (elemento.status === "OK") {
                    vistorias[indice].imagem = "img/upload-ok.png";
                    vistorias[indice].mensagem = "Enviar vistoria";
                }
                else {
                    vistorias[indice].imagem = "img/upload-nok.png";
                    vistorias[indice].mensagem = "Vistoria incompleta";
                }
            });

            $scope.vistorias = vistorias;
            $scope.listaVazia = false;
        }
    });

    //verifica se status do item da lista esta OK e redireciona a página de envio
    $scope.enviar = function (obj) {
        if (obj.status === "OK")
            $state.go("menu.envioDeVistoria", {id: obj.sinistroId});
    };

});

globalCtrl.controller('envioDeVistoriaCtrl', function($scope, $stateParams, $http, $ionicLoading, $cordovaFileTransfer, Database) {
    var vistorias = Database.vistorias;
    var obj = {};
    $scope.mensagemTopo = "";
    $scope.pictures = null;
    $scope.quantidadeFotos = null;
    $scope.temFotos = false;
    var todasFotos = [];

    //função a ser chamada em postVistoria de forma assíncrona
    var postFoto = function (fotoPath, index, array, url, options) {
        $cordovaFileTransfer.upload(url, fotoPath, options)
            .then(function(response) { //sucesso
                array[index].envioStatus = 'OK';
                array[index].progresso = '100%';
            },
            function(erro) { //falha
                array[index].envioStatus = 'ERRO';
                array[index].progresso = 'Erro';
                console.log(erro);
            },
            function (progresso) { //progresso
                console.log(progresso);
            });
    };

    //futuramente deve ser criado um service específico para as chamadas de WebService
    var postVistoria = function (vistoria) {
        var HEADER = {header : {'Content-Type' : 'application/json; charset=UTF-8'}};
        var URL_VISTORIA = SERVER_ADDR + "vistorias";
        var URL_IMAGENS = SERVER_ADDR + "sinistros/upload/"; // {nomeImagem}
        var options = { fileKey: "file", fileName: null, chunkedMode: false, mimeType: "image/jpg" };
        var rota;
        //mostar aviso de envio na view
        $scope.removerAviso = false;

        //envia o JSON da vistoria
        $http.post(URL_VISTORIA, vistoria, HEADER)
            .then(function (response) {
                //após enviar a vistoria, faz chamada do service de upload para cada imagem (array todasFotos já populado)
                for (var i=0; i<todasFotos.length; i++) {
                    var temp = todasFotos[i];
                    //apresenta o status de envio na view
                    temp.envioStatus = "ENVIANDO";
                    temp.progresso = "Enviando...";
                    //prepara rota e opções para cada imagem
                    rota = URL_IMAGENS + temp.name;
                    options.fileName = temp.name;
                    postFoto(temp.path, i, todasFotos, rota, options);
                }
            
            },
            function (erro) {
                console.log("Erro no envio do json: ");
                console.log(erro);
                // $scope.removerAviso = true;
                todasFotos.forEach(function(element) {
                    element.envioStatus = 'ERRO';
                    element.progresso = "Erro";
                });
                
            });
    };
    
    //essa função deveria ser implementada no service Database!
    var getSinistroById = function (id) {
        vistorias = Database.vistorias;
        
        for (var i = 0; i < vistorias.length; i++) {
            if (vistorias[i].sinistroId == id) {
                return vistorias[i];
            }
        }
        return false;
    };

    //função para preparar a view criando um array de fotos e informando a quantidade
    var atualizarTela = function () {
        var listaAtributos = [
            'vistoriaRegistroChegada01CtrlPictures',
            'vistoriaRegistroChegada02CtrlPictures',
            'vistoriaRegistroChegada03CtrlPictures',
            'vistoriaRegistroChegada04CtrlPictures'
        ];
        
        obj = getSinistroById($stateParams.id);
        try {
            //varre objeto procurando os atributos do array 'listaAtributos' que tenham imagens
            listaAtributos.forEach(function(propriedade) {
                var atr = obj[propriedade];
                if ( Array.isArray(atr) ) {
                    todasFotos = todasFotos.concat(atr);
                }
            });

            $scope.pictures = todasFotos;
            $scope.temFotos = (todasFotos.length > 0);
            $scope.quantidadeFotos = todasFotos.length;

            if ($scope.pictures.length > 0) {
                $scope.mensagemTopo = "Há " + todasFotos.length + " fot" + (todasFotos.length < 2 ? 'o' : 'os') + " para enviar. Enviando vistoria...";
            }
            else {
                $scope.mensagemTopo = "Não há fotos para serem enviadas. Enviando vistoria...";    
            }
        }
        catch (e) {
            $scope.temFotos = false;
            $scope.mensagemTopo = "Não há fotos para serem enviadas. Enviando vistoria...";
            console.log(e);
        }
        finally {
            $ionicLoading.hide();
        }
    };

    $scope.$on('$ionicView.beforeEnter', function() {
        $scope.removerAviso = true;
        $ionicLoading.show({ template: '<ion-spinner></ion-spinner>' });
    });

    $scope.$on('$ionicView.enter', function() {
        atualizarTela();
    });

    $scope.$on('$ionicView.afterEnter', function() {
        console.log(obj);
        postVistoria(obj);
    });

});