

angular.module("singlepageapp")
    .config(["$routeProvider", function ($routeProvider) {

        $routeProvider.when("/", {
            templateUrl: "view/home.html",

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