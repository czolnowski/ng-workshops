angular.module('ngWorkshopsApp').controller('IssueDetailViewCtrl',
    ['$scope', '$http', '$httpBackend', '$routeParams',
    function ($scope, $http, $httpBackend, $routeParams) {

     $httpBackend.whenGET('/issues/' + $routeParams).respond(200, {
        "id": 1,
        "title": "Add new user",
        "description": "Lorem ipsum...",
        "status": "In Progress",
        "type": "Task",
        "priority": "major",
        "assignee": "Arek Zając",
        "updated_at": "2013-09-12T06:20:31+0000",
        "created_at": "2013-09-12T06:20:31+0000"
     });

     $httpBackend.whenGET('/comments/').respond(200, {
        "data": [
            {
                "id": 1,
                "message": "Lorem ipsum",
                "issue_id": 1,
                "autor": {
                    // User Item
                },
                "updated_at": "2013-09-12T06:20:31+0000",
                "created_at": "2013-09-12T06:20:31+0000"
            }
        ],
        "pagging": {
            "itemsCount": 1110
        }
    });


     $http.get('/issues/' + $routeParams).success(function(data, status, headers) {
        $scope.issue = data;
     });

     $http.get('/comments/').success(function(data, status, headers) {
         console.log(data);
        $scope.comments = data;
     });
}])