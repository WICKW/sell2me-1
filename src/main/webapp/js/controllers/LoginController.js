// app.controller("AuthController"), '$scope', '$resource',
//     function ($scope, $rescource) {
//         var token = $rescource
//     };

app.controller('LoginController', ['$scope', '$http', function($scope)
{
    $scope.user = {};
    
    this.login = function(){
        console.log("Inside login()");
        console.log($scope.user);
    };
        
}]);