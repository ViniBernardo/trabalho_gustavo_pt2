angular.module("singlepageapp").factory("APIService",
    function($http){

        var _listar = function(){
            return $http({
                method:"GET",
                url: "http://localhost:8080/anduino/cliente",

            });
        };


        //--------------------------------------------------------------------------------



        var _salvar = function(dados){
            return $http({
                method:"POST",
                url: " http://localhost:8080/anduino/cliente/",
                data:dados
            });
        };

        var _delete = function(id){
            return $http({
                method:"DELETE",
                url: " http://localhost:8080/anduino/cliente/"+id,
                data:id
            });
        };



        return {

            listar: _listar,
            salvar: _salvar,
            delete:_delete


        }
    });