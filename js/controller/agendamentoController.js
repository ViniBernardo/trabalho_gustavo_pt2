angular.module("singlepageapp").controller("agendamentoController", function ($scope, $location) {


    $scope.data = new Date();


    $scope.imprimirDataEHorario = function(d){
        alert(d);
    }

    $scope.irPara = function (caminho) {
        $location.url(caminho);
    };




});