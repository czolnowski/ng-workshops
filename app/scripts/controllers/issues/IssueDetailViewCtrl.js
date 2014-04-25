angular.module('ngWorkshopsApp').controller('IssueDetailViewCtrl',
    ['$scope', '$http', '$routeParams',
    function ($scope, $http, $routeParams) {

     $http.get('/issues/' + $routeParams.id).success(function(data, status, headers) {
        $scope.issue = data;
     });

     $http.get('/comments/').success(function(data, status, headers) {
        $scope.comments = data;
     });

    $scope.add_comment = function(comment) {
      $http.post('/issues/comment').success(function(data, status, headers) {
        $scope.comments.data.push(angular.copy(data));
      });
    };

    $scope.new_comment = {
        project_id: $routeParams.project_id
    };
}]);