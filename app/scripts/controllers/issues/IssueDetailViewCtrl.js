angular.module('ngWorkshopsApp').controller('IssueDetailViewCtrl',
    ['$scope', '$http', '$routeParams',
    function ($scope, $http, $routeParams) {

     $http.get('/issues/' + $routeParams.id).success(function(data, status, headers) {
        $scope.issue = data;
     });

     $http.get('/comments/').success(function(data, status, headers) {
        $scope.comments = data;
     });
}]);