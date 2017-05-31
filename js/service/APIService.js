
angular.module("singlepageapp").factory("APIService",
    function($http){

        var _listar = function(){
            return $http({
                method:"GET",
                url: "http://localhost:8080/anduino/cliente",
            });
        };


        var _salvar = function(dados){
            return $http({
                method:"POST",
                url: "http://localhost:8080/anduino/cliente",
                data:dados
            });
        };
        //--------------------------------------------------------------------------------








        return {

            listar: _listar,
            salvar: _salvar


        }
    });
