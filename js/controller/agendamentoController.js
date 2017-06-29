
angular.module("singlepageapp").controller("agendamentoController", function ($scope,APIService, $location) {


    $scope.arduino = [];
    $scope.agendamento = [];


    $scope.irPara = function(caminho){
        $location.url(caminho);
    };




    $scope.salvar = function(casa){

        var str = moment(casa.data).add(24, 'hours').format('LLL');
        var dados = str.split(" ");

        $scope.casa.hora = dados[3] + ":00 " + dados[4];

        APIService.salvar($scope.casa).then(function (dados) {
            $location.url('/agendamentos');
        }, function (err) {
            toastr.error('Erro ao agendar', {timeOut : 500});
        });
    };

    $scope.apagar = function(agendamento){
             APIService.delete(agendamento).then(function (dados) {
                 listar();
            }, function (err) {
                alert('Erro ao excluir!!!', {timeOut : 500});
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



    $scope.editarAgendamento = function (agendamento) {

        var sucesso = function () {
            alert('Atualizado com sucesso!!!', {timeOut : 500});
            $scope.paginar($scope.pag);
        };

        var erro = function (err) {
            alert('Erro ao atualizar!!!', {timeOut : 500});
        };

        APIService.editarAgendamento(agendamento, agendamento.id_cadastro).then(sucesso, erro);


    };



    listar();




});



