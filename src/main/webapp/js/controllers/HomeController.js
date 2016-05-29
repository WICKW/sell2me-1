app.controller('HomeController', ['$scope', '$http', function($scope, $http)
{

    this.getUsers = function ()
    {
        $http.get('/user/all').success(function (result, status) {
            $scope.users = result;
        }).error(function (result, status) {
            console.log("Error on getUsers();");
        });
    };

}]);