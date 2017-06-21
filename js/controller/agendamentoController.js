
angular.module("singlepageapp").controller("agendamentoController", function ($scope,APIService, $location) {


    $scope.arduino = [];

    $scope.irPara = function(caminho){
        $location.url(caminho);
    };




    $scope.salvar = function(curso){

        APIService.salvar(curso).then(function(curso){
            alert("cadastrada com sucesso");
            $location.url("/agendamentos");
        },function(err){
            alert("Deu tilt");
        });
    }

    $scope.delete = function(id){

        APIService.delete(id).then(function(id){
        },function(){
            $location.url("/agendamentos");
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

    var listar = function(){

        var sucesso = function(dados){
            $scope.arduino = dados.data;
        };

        var erro = function(err){
            alert("Erro"+err);
        };

        APIService.listar().then(sucesso,erro);
    };



    $scope.edita = function (curso) {
        //alert(curso);
        var sucesso = function (dados) {
            $scope.aul = dados.data;
        };

        var erro = function (err) {
            alert("Erro ao listar os alunos");
        };

        APIService.listarAlunoPorCurso(curso).then(sucesso,erro);

    }


    listar();




});



