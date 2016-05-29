var app = angular.module('app', [
    'ui.router',
    'ngResource'
]);

app.config(function ($stateProvider, $urlRouterProvider, $httpProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: 'views/login.html',
            controller: 'LoginController',
            controllerAs: 'lctrl'
        })
        .state('home', {
            url: '/home',
            templateUrl: 'views/home.html',
            controller: 'HomeController',
            controllerAs: 'hctrl'
        });

    $httpProvider.defaults.headers.common = {
        'X-Auth-Token': 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzdXNlciIsImF1ZGllbmNlIjoid2ViIiwiY3JlYXRlZCI6MTQ2NDQ3MTMxODE1MywiZXhwIjoxNDY1MDc2MTE4fQ.WRVrJoMBAe6pU9ylW8m-eWGvHkvGPIqlwNID3ZQwzlG9SCDfWU0DTql3zUX225f28b_G8ewwqTp61R0Ly5QN0w',
        'Content-Type': 'application/json'
    };
});

app.run(function ($rootScope) {
    $rootScope.initialized = true;
});