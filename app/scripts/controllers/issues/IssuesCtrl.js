angular.module('ngWorkshopsApp')
.controller('IssuesCtrl', ['$scope', function($scope){
    $scope.project = {};
    $scope.project = {
        "id" : 2,
        "name": 'angular'
    };
    $scope.issues = {};
    $scope.issues = [
        {
            "id": 1,
            "title": "Add new user",
            "description": "Lorem ipsum...",
            "status": "In Progress",
            "type": "Task",
            "priority": "major",
            "assignee": "Arek Zając",
            "updated_at": "2013-09-12 06:20:31",
            "created_at": "2013-09-12 06:20:31"
        },
        {
            "id": 2,
            "title": "Edit user",
            "description": "fdgdfg",
            "status": "To Do",
            "type": "Bug",
            "priority": "major",
            "assignee": "Krzysiek",
            "updated_at": "2013-09-13 06:20:31",
            "created_at": "2013-09-13 06:20:31"
        },
        {
            "id": 3,
            "title": "Delete user",
            "description": "Lorem ipsum...",
            "status": "In Progress",
            "type": "Task",
            "priority": "minor",
            "assignee": "Ania",
            "updated_at": "2013-09-14 06:20:31",
            "created_at": "2013-09-14 06:20:31"
        },
    ];
}])
