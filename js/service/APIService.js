angular.module("singlepageapp").factory("APIService",
    function($http){

        var _listar = function(){
            return $http({
                method:"GET",
                url: "http://localhost:8080/anduino/casa_service/listarAgendamentos",

            });
        };


        //--------------------------------------------------------------------------------
        var _listarAgendamentosPorPagina = function (id) {
            return $http({
                method: "GET",
                url: "http://localhost:8080/anduino/casa_service/listarPorPagina/" + id + "/5",
            });
        };


        var _salvar = function(dados){
            return $http({
                method:"POST",
                url: "http://localhost:8080/anduino/casa_service/marcarAgendamento/",
                data:dados
            });
        };

        var _delete = function(dados){
            return $http({
                method:"PUT",
                url: "http://localhost:8080/anduino/casa_service/deletarAgendamento",
                data:dados
            });
        };
        var _editarAgendamento = function (dados) {
            return $http({
                method: "PUT",
                url: "http://localhost:8080/anduino/casa_service/atualizarAgendamento",
                data: dados
            });
        };



        return {

            listar: _listar,
            salvar: _salvar,
            delete:_delete,
            listarAgendamentosPorPagina:_listarAgendamentosPorPagina,
            editarAgendamento:_editarAgendamento
        }
    });