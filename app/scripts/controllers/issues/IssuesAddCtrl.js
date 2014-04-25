angular.module('ngWorkshopsApp')
.controller('IssuesAddCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){

    $http.get('/project/' + $routeParams.id).success(function(data, status, headers) {
        $scope.project = data;
    });

    $scope.addActionUrl = '#/project/' + $routeParams.id + '/issues';        
}])
