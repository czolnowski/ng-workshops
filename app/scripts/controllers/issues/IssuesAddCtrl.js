angular.module('ngWorkshopsApp')
.controller('IssuesAddCtrl', ['$scope', function($scope){
    $scope.project = {};
    $scope.project = {
        "id" : 2,
        "name": 'angular'
    };

    $scope.addActionUrl = '#/project/' + $scope.project.id + '/issues';
}])
