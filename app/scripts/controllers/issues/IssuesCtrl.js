angular.module('ngWorkshopsApp')
.controller('IssuesCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){

     $http.get('/project/' + $routeParams.id).success(function(data, status, headers) {
        $scope.project = data;
     });

    $http.get('/project/' + $routeParams.id + '/issues').success(function(data, status, headers) {
        $scope.issues = data;
    });
}])
