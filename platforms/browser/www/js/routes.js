angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

.state('menu', {
  url: '/side-menu',
  templateUrl: 'templates/menu.html',
  abstract:true
})

.state('menu.login', {
  url: '/login',
  views: {
    'side-menu21': {
      templateUrl: 'templates/login.html',
      controller: 'loginCtrl'
    }
  }
})

.state('menu.load', {
  url: '/load',
  views: {
    'side-menu21': {
      templateUrl: 'templates/load.html',
      controller: 'loadCtrl'
    }
  }
})

.state('menu.ajuda', {
  url: '/ajuda-1',
  views: {
    'side-menu21': {
      templateUrl: 'templates/ajuda.html',
      controller: 'ajudaCtrl'
    }
  }
})

.state('menu.ajuda2', {
  url: '/ajuda-2',
  views: {
    'side-menu21': {
      templateUrl: 'templates/ajuda2.html',
      controller: 'ajuda2Ctrl'
    }
  }
})

.state('menu.ajuda3', {
  url: '/ajuda-3',
  views: {
    'side-menu21': {
      templateUrl: 'templates/ajuda3.html',
      controller: 'ajuda3Ctrl'
    }
  }
})

.state('menu.enviarVistorias', {
  url: '/vistorias/enviar',
  views: {
    'side-menu21': {
      templateUrl: 'templates/enviarVistorias.html',
      controller: 'enviarVistoriasCtrl'
    }
  }
})

.state('menu.envioDeVistoria', {
  url: '/vistorias/enviar/{id}',
  views: {
    'side-menu21': {
      templateUrl: 'templates/envioDeVistoria.html',
      controller: 'envioDeVistoriaCtrl'
    }
  }
})

.state('menu.realizarVistorias', {
  url: '/vistorias/realizar',
  views: {
    'side-menu21': {
      templateUrl: 'templates/realizarVistorias.html',
      controller: 'realizarVistoriasCtrl'
    }
  }
})

.state('menu.configuracoes', {
  url: '/configuracoes',
  views: {
    'side-menu21': {
      templateUrl: 'templates/configuracoes.html',
      controller: 'configuracoesCtrl'
    }
  }
})

.state('menu.filesystem', {
  url: '/filesystem',
  views: {
    'side-menu21': {
      templateUrl: 'templates/filesystem.html',
      controller: 'filesystemCtrl'
    }
  }
})

.state('menu.vistoriaDetalhes', {
  url: '/vistorias/detalhes/{sinistroId}',
  views: {
    'side-menu21': {
      templateUrl: 'templates/vistoriaDetalhes.html',
      controller: 'vistoriaDetalhesCtrl'
    }
  }
})

.state('menu.vistoriaRegistroChegada01', {
  url: '/vistoria/registroChegada/{sinistroId}',
  views: {
    'side-menu21': {
      templateUrl: 'templates/vistoriaTirarFoto.html',
      controller: 'vistoriaRegistroChegada01Ctrl'
    }
  }
})

.state('menu.vistoriaRegistroChegada02', {
  url: '/vistoria/registroChegada/{sinistroId}',
  views: {
    'side-menu21': {
      templateUrl: 'templates/vistoriaTirarFoto.html',
      controller: 'vistoriaRegistroChegada02Ctrl'
    }
  }
})

.state('menu.vistoriaRegistroChegada03', {
  url: '/vistoria/registroChegada/{sinistroId}',
  views: {
    'side-menu21': {
      templateUrl: 'templates/vistoriaSimNao.html',
      controller: 'vistoriaRegistroChegada03Ctrl'
    }
  }
})

.state('menu.vistoriaRegistroChegada03Ft', {
  url: '/vistoria/registroChegada/{sinistroId}',
  views: {
    'side-menu21': {
      templateUrl: 'templates/vistoriaTirarFoto.html',
      controller: 'vistoriaRegistroChegada03FtCtrl'
    }
  }
})

.state('menu.vistoriaRegistroChegada04', {
  url: '/vistoria/registroChegada/{sinistroId}',
  views: {
    'side-menu21': {
      templateUrl: 'templates/vistoriaSimNao.html',
      controller: 'vistoriaRegistroChegada04Ctrl'
    }
  }
})

.state('menu.vistoriaProcessoEtapa01', {
  url: '/vistoria/processo/{sinistroId}',
  views: {
    'side-menu21': {
      templateUrl: 'templates/vistoriaSimNao.html',
      controller: 'vistoriaProcessoEtapa01Ctrl'
    }
  }
})

.state('menu.vistoriaProcessoEtapa02', {
  url: '/vistoria/processo/{sinistroId}',
  views: {
    'side-menu21': {
      templateUrl: 'templates/vistoriaSimNao.html',
      controller: 'vistoriaProcessoEtapa02Ctrl'
    }
  }
})

.state('menu.vistoriaProcessoEtapa03', {
  url: '/vistoria/processo/{sinistroId}',
  views: {
    'side-menu21': {
      templateUrl: 'templates/vistoriaDescritivo.html',
      controller: 'vistoriaProcessoEtapa03Ctrl'
    }
  }
})

.state('menu.vistoriaProcessoEtapa03B', {
  url: '/vistoria/processo/{sinistroId}',
  views: {
    'side-menu21': {
      templateUrl: 'templates/vistoriaSimNao.html',
      controller: 'vistoriaProcessoEtapa03BCtrl'
    }
  }
})

.state('menu.vistoriaProcessoEtapa04', {
  url: '/vistoria/processo/{sinistroId}',
  views: {
    'side-menu21': {
      templateUrl: 'templates/vistoriaSimNao.html',
      controller: 'vistoriaProcessoEtapa04Ctrl'
    }
  }
})

.state('menu.vistoriaProcessoEtapa05', {
  url: '/vistoria/processo/{sinistroId}',
  views: {
    'side-menu21': {
      templateUrl: 'templates/vistoriaSimNao.html',
      controller: 'vistoriaProcessoEtapa05Ctrl'
    }
  }
})

.state('menu.vistoriaProcessoEtapa06', {
  url: '/vistoria/processo/{sinistroId}',
  views: {
    'side-menu21': {
      templateUrl: 'templates/vistoriaSimNao.html',
      controller: 'vistoriaProcessoEtapa06Ctrl'
    }
  }
})

.state('menu.vistoriaProcessoEtapa07', {
  url: '/vistoria/processo/{sinistroId}',
  views: {
    'side-menu21': {
      templateUrl: 'templates/vistoriaCombobox.html',
      controller: 'vistoriaProcessoEtapa07Ctrl'
    }
  }
})

.state('menu.vistoriaProcessoEtapa08', {
  url: '/vistoria/processo/{sinistroId}',
  views: {
    'side-menu21': {
      templateUrl: 'templates/vistoriaCombobox.html',
      controller: 'vistoriaProcessoEtapa08Ctrl'
    }
  }
})

.state('menu.vistoriaProcessoEtapa09', {
  url: '/vistoria/processo/{sinistroId}',
  views: {
    'side-menu21': {
      templateUrl: 'templates/vistoriaDescritivo.html',
      controller: 'vistoriaProcessoEtapa09Ctrl'
    }
  }
})

.state('menu.vistoriaProcessoEtapa10', {
  url: '/vistoria/processo/{sinistroId}',
  views: {
    'side-menu21': {
      templateUrl: 'templates/vistoriaCombobox.html',
      controller: 'vistoriaProcessoEtapa10Ctrl'
    }
  }
})

.state('menu.vistoriaProcessoEtapa11', {
  url: '/vistoria/processo/{sinistroId}',
  views: {
    'side-menu21': {
      templateUrl: 'templates/vistoriaCombobox.html',
      controller: 'vistoriaProcessoEtapa11Ctrl'
    }
  }
})

.state('menu.vistoriaProcessoEtapa12', {
  url: '/vistoria/processo/{sinistroId}',
  views: {
    'side-menu21': {
      templateUrl: 'templates/vistoriaCombobox.html',
      controller: 'vistoriaProcessoEtapa12Ctrl'
    }
  }
})

.state('menu.vistoriaProcessoEtapa13', {
  url: '/vistoria/processo/{sinistroId}',
  views: {
    'side-menu21': {
      templateUrl: 'templates/vistoriaCombobox.html',
      controller: 'vistoriaProcessoEtapa13Ctrl'
    }
  }
})

.state('menu.vistoriaProcessoEtapa14', {
  url: '/vistoria/processo/{sinistroId}',
  views: {
    'side-menu21': {
      templateUrl: 'templates/vistoriaCombobox.html',
      controller: 'vistoriaProcessoEtapa14Ctrl'
    }
  }
})

.state('menu.vistoriaProcessoEtapa15', {
  url: '/vistoria/processo/{sinistroId}',
  views: {
    'side-menu21': {
      templateUrl: 'templates/vistoriaDescritivo.html',
      controller: 'vistoriaProcessoEtapa15Ctrl'
    }
  }
})

.state('menu.vistoriaProcessoEtapa16', {
  url: '/vistoria/processo/{sinistroId}',
  views: {
    'side-menu21': {
      templateUrl: 'templates/vistoriaCombobox.html',
      controller: 'vistoriaProcessoEtapa16Ctrl'
    }
  }
})

.state('menu.vistoriaProcessoEtapa17', {
  url: '/vistoria/processo/{sinistroId}',
  views: {
    'side-menu21': {
      templateUrl: 'templates/vistoriaDescritivo.html',
      controller: 'vistoriaProcessoEtapa17Ctrl'
    }
  }
})

.state('menu.vistoriaProcessoEtapa18', {
  url: '/vistoria/processo/{sinistroId}',
  views: {
    'side-menu21': {
      templateUrl: 'templates/vistoriaCombobox.html',
      controller: 'vistoriaProcessoEtapa18Ctrl'
    }
  }
})

.state('menu.vistoriaProcessoEtapa19', {
  url: '/vistoria/processo/{sinistroId}',
  views: {
    'side-menu21': {
      templateUrl: 'templates/vistoriaCombobox.html',
      controller: 'vistoriaProcessoEtapa19Ctrl'
    }
  }
})

.state('menu.vistoriaProcessoEtapa20', {
  url: '/vistoria/processo/{sinistroId}',
  views: {
    'side-menu21': {
      templateUrl: 'templates/vistoriaSimNao.html',
      controller: 'vistoriaProcessoEtapa20Ctrl'
    }
  }
})

.state('menu.vistoriaProcessoEtapa21', {
  url: '/vistoria/processo/{sinistroId}',
  views: {
    'side-menu21': {
      templateUrl: 'templates/vistoriaSimNao.html',
      controller: 'vistoriaProcessoEtapa21Ctrl'
    }
  }
})

.state('menu.vistoriaProcessoEtapa22', {
  url: '/vistoria/processo/{sinistroId}',
  views: {
    'side-menu21': {
      templateUrl: 'templates/vistoriaCheckbox.html',
      controller: 'vistoriaProcessoEtapa22Ctrl'
    }
  }
})

.state('menu.vistoriaProcessoEtapa23', {
  url: '/vistoria/processo/{sinistroId}',
  views: {
    'side-menu21': {
      templateUrl: 'templates/vistoriaSimNao.html',
      controller: 'vistoriaProcessoEtapa23Ctrl'
    }
  }
})

.state('menu.vistoriaProcessoEtapa24', {
  url: '/vistoria/processo/{sinistroId}',
  views: {
    'side-menu21': {
      templateUrl: 'templates/vistoriaSimNao.html',
      controller: 'vistoriaProcessoEtapa24Ctrl'
    }
  }
})

.state('menu.vistoriaProcessoEtapa25', {
  url: '/vistoria/processo/{sinistroId}',
  views: {
    'side-menu21': {
      templateUrl: 'templates/vistoriaSimNao.html',
      controller: 'vistoriaProcessoEtapa25Ctrl'
    }
  }
})

.state('menu.vistoriaItemReclamados', {
  url: '/vistoria/processo/itens/{sinistroId}',
  views: {
    'side-menu21': {
      templateUrl: 'templates/vistoriaItensReclamados.html',
      controller: 'vistoriaItensReclamadosCtrl'
    }
  }
})

.state('menu.vistoriaAssegurado01', {
  url: '/vistoria/processo/assegurado/{sinistroId}',
  views: {
    'side-menu21': {
      templateUrl: 'templates/vistoriaSimNao.html',
      controller: 'vistoriaAssegurado01Ctrl'
    }
  }
})

.state('menu.vistoriaAssegurado02', {
  url: '/vistoria/processo/assegurado/{sinistroId}',
  views: {
    'side-menu21': {
      templateUrl: 'templates/vistoriaSimNao.html',
      controller: 'vistoriaAssegurado02Ctrl'
    }
  }
})

.state('menu.vistoriaAssegurado03', {
  url: '/vistoria/processo/assegurado/{sinistroId}',
  views: {
    'side-menu21': {
      templateUrl: 'templates/vistoriaSimNao.html',
      controller: 'vistoriaAssegurado03Ctrl'
    }
  }
})

.state('menu.vistoriaAssegurado04', {
  url: '/vistoria/processo/assegurado/{sinistroId}',
  views: {
    'side-menu21': {
      templateUrl: 'templates/vistoriaSimNao.html',
      controller: 'vistoriaAssegurado04Ctrl'
    }
  }
})

.state('menu.vistoriaAssegurado05', {
  url: '/vistoria/processo/assegurado/{sinistroId}',
  views: {
    'side-menu21': {
      templateUrl: 'templates/vistoriaSimNao.html',
      controller: 'vistoriaAssegurado05Ctrl'
    }
  }
})

.state('menu.vistoriaAssegurado06', {
  url: '/vistoria/processo/assegurado/{sinistroId}',
  views: {
    'side-menu21': {
      templateUrl: 'templates/vistoriaSimNao.html',
      controller: 'vistoriaAssegurado06Ctrl'
    }
  }
})

.state('menu.vistoriaRegistrarFoto01', {
  url: '/vistoria/processo/registrarFoto/{sinistroId}',
  views: {
    'side-menu21': {
      templateUrl: 'templates/vistoriaTirarFoto.html',
      controller: 'vistoriaRegistroFotos01Ctrl'
    }
  }
})

.state('menu.vistoriaRegistrarFoto02', {
  url: '/vistoria/processo/registrarFoto/{sinistroId}',
  views: {
    'side-menu21': {
      templateUrl: 'templates/vistoriaTirarFoto.html',
      controller: 'vistoriaRegistroFotos02Ctrl'
    }
  }
})

.state('menu.vistoriaRegistrarFoto03', {
  url: '/vistoria/processo/registrarFoto/{sinistroId}',
  views: {
    'side-menu21': {
      templateUrl: 'templates/vistoriaTirarFoto.html',
      controller: 'vistoriaRegistroFotos03Ctrl'
    }
  }
})

.state('menu.vistoriaRegistrarFoto04', {
  url: '/vistoria/processo/registrarFoto/{sinistroId}',
  views: {
    'side-menu21': {
      templateUrl: 'templates/vistoriaTirarFoto.html',
      controller: 'vistoriaRegistroFotos04Ctrl'
    }
  }
})

.state('menu.vistoriaRegistrarFoto05', {
  url: '/vistoria/processo/registrarFoto/{sinistroId}',
  views: {
    'side-menu21': {
      templateUrl: 'templates/vistoriaItensReclamadosFotos.html',
      controller: 'vistoriaRegistroFotos05Ctrl'
    }
  }
})

.state('menu.vistoriaRegistrarFoto05Ft', {
  url: '/vistoria/processo/registrarFoto/{sinistroId}/{item}',
  views: {
    'side-menu21': {
      templateUrl: 'templates/vistoriaTirarFoto.html',
      controller: 'vistoriaRegistroFotos05FtCtrl'
    }
  }
})

.state('menu.vistoriaColetaDocumentos01', {
  url: '/vistoria/processo/coletaDocumentos/{sinistroId}',
  views: {
    'side-menu21': {
      templateUrl: 'templates/vistoriaColetaDocumentos.html',
      controller: 'vistoriaColetaDocumentos01Ctrl'
    }
  }
})

.state('menu.vistoriaColetaDocumentos02', {
  url: '/vistoria/processo/coletaDocumentos/{sinistroId}',
  views: {
    'side-menu21': {
      templateUrl: 'templates/vistoriaColetaDocumentos.html',
      controller: 'vistoriaColetaDocumentos02Ctrl'
    }
  }
})

.state('menu.vistoriaColetaDocumentos03', {
  url: '/vistoria/processo/coletaDocumentos/{sinistroId}',
  views: {
    'side-menu21': {
      templateUrl: 'templates/vistoriaColetaDocumentos.html',
      controller: 'vistoriaColetaDocumentos03Ctrl'
    }
  }
})

.state('menu.vistoriaColetaDocumentos04', {
  url: '/vistoria/processo/coletaDocumentos/{sinistroId}',
  views: {
    'side-menu21': {
      templateUrl: 'templates/vistoriaColetaDocumentos.html',
      controller: 'vistoriaColetaDocumentos04Ctrl'
    }
  }
})

.state('menu.vistoriaColetaDocumentos05', {
  url: '/vistoria/processo/coletaDocumentos/{sinistroId}',
  views: {
    'side-menu21': {
      templateUrl: 'templates/vistoriaColetaDocumentos.html',
      controller: 'vistoriaColetaDocumentos05Ctrl'
    }
  }
})

.state('menu.vistoriaColetaDocumentos06', {
  url: '/vistoria/processo/coletaDocumentos/{sinistroId}',
  views: {
    'side-menu21': {
      templateUrl: 'templates/vistoriaColetaDocumentos.html',
      controller: 'vistoriaColetaDocumentos06Ctrl'
    }
  }
})

.state('menu.vistoriaColetaDocumentos07', {
  url: '/vistoria/processo/coletaDocumentos/{sinistroId}',
  views: {
    'side-menu21': {
      templateUrl: 'templates/vistoriaColetaDocumentos.html',
      controller: 'vistoriaColetaDocumentos07Ctrl'
    }
  }
})

.state('menu.vistoriaColetaDocumentos08', {
  url: '/vistoria/processo/coletaDocumentos/{sinistroId}',
  views: {
    'side-menu21': {
      templateUrl: 'templates/vistoriaColetaDocumentos.html',
      controller: 'vistoriaColetaDocumentos08Ctrl'
    }
  }
})

.state('menu.vistoriaColetaDocumentos09', {
  url: '/vistoria/processo/coletaDocumentos/{sinistroId}',
  views: {
    'side-menu21': {
      templateUrl: 'templates/vistoriaColetaDocumentos.html',
      controller: 'vistoriaColetaDocumentos09Ctrl'
    }
  }
})

.state('menu.vistoriaColetaDocumentos10', {
  url: '/vistoria/processo/coletaDocumentos/{sinistroId}',
  views: {
    'side-menu21': {
      templateUrl: 'templates/vistoriaColetaDocumentos.html',
      controller: 'vistoriaColetaDocumentos10Ctrl'
    }
  }
})

.state('menu.vistoriaVerFoto', {
  url: '/vistoria/verFoto/{picture}/{picId}',
  views: {
    'side-menu21': {
      templateUrl: 'templates/vistoriaVerFoto.html',
      controller: 'verFotoCtrl'
    }
  }
})

.state('menu.vistoriaAta', {
  url: '/vistoria/processo/{sinistroId}',
  views: {
    'side-menu21': {
      templateUrl: 'templates/vistoriaAta.html',
      controller: 'vistoriaAtaCtrl'
    }
  }
})

.state('menu.vistoriaAssinatura', {
  url: '/vistoria/processo/{sinistroId}',
  views: {
    'side-menu21': {
      templateUrl: 'templates/vistoriaAssinatura.html',
      controller: 'vistoriaAssinaturaCtrl'
    }
  }
})

.state('menu.vistoriaFinalizacao', {
  url: '/vistoria/processo/{sinistroId}',
  views: {
    'side-menu21': {
      templateUrl: 'templates/vistoriaFinalizacao.html',
      controller: 'vistoriaFinalizacaoCtrl'
    }
  }
})

$urlRouterProvider.otherwise('/side-menu/load')

});
