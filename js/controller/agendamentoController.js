angular.module("singlepageapp").controller("agendamentoController", function ($scope,APIService, $location) {


    $scope.arduino = [];

    $scope.irPara = function(caminho){
        $location.url(caminho);
    };

    $scope.salvar = function(tabela_anduino){

        APIService.salvar(tabela_anduino).then(function(tabela_anduino){
            alert("cadastrada com sucesso");
            $location.url("/adicionaAgendamentos");
        },function(err){
            alert("Deu tilt");
        });
    }




    var listar = function(){

        var sucesso = function(dados){
            $scope.arduino = dados.data;
        };

        var erro = function(err){
            alert("Erro"+err);
        };

        APIService.listar().then(sucesso,erro);
    };






    listar();




});



