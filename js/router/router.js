

angular.module("singlepageapp")
    .config(["$routeProvider", function ($routeProvider) {

        $routeProvider.when("/", {
            templateUrl: "view/home.html",
            controller: "homeController"
        });

        $routeProvider.when("/agendamentos", {
            templateUrl: "view/Agendamentos-lista.html",
            controller:"agendamentoController"
        });
        $routeProvider.when("/adicionaAgendamentos", {
            templateUrl: "view/Agendamentos-adiciona.html",
            controller:"agendamentoController"
        });


    }]);