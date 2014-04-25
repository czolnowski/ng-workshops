angular.module('ngWorkshopsApp')
.controller('ProjectsCtrl', ['$scope', 'ngTableParams', function($scope, ngTableParams) {
        console.log('ProjectCtrl loaded');

        var data = [
            {id: 1, name: "Project 1", email:"exampkle1@example.org", edit: "#", view: "#"},
            {id: 2, name: "Project 2", email:"exampkle2@example.org", edit: "#", view: "#"},
            {id: 3, name: "Project 3", email:"exampkle3@example.org", edit: "#", view: "#"},
            {id: 4, name: "Project 4", email:"exampkle4@example.org", edit: "#", view: "#"},
            {id: 5, name: "Project 5", email:"exampkle5@example.org", edit: "#", view: "#"},
            {id: 6, name: "Project 6", email:"exampkle6@example.org", edit: "#", view: "#"},
            {id: 7, name: "Project 7", email:"exampkle7@example.org", edit: "#", view: "#"},
            {id: 8, name: "Project 8", email:"exampkle8@example.org", edit: "#", view: "#"},
            {id: 9, name: "Project 9", email:"exampkle9@example.org", edit: "#", view: "#"},
            {id: 10, name: "Project 10", email:"exampkl10e@example.org", edit: "#", view: "#"},
            {id: 11, name: "Project 11", email:"exampkle11@example.org", edit: "#", view: "#"},
            {id: 12, name: "Project 12", email:"exampkle12@example.org", edit: "#", view: "#"},
            {id: 13, name: "Project 13", email:"exampkle13@example.org", edit: "#", view: "#"},
            {id: 14, name: "Project 14", email:"exampkle14@example.org", edit: "#", view: "#"},
            {id: 15, name: "Project 15", email:"exampkle15@example.org", edit: "#", view: "#"},
            {id: 16, name: "Project 16", email:"exampkle16@example.org", edit: "#", view: "#"},
            {id: 17, name: "Project 17", email:"exampkle17@example.org", edit: "#", view: "#"},
            {id: 18, name: "Project 18", email:"exampkle18@example.org", edit: "#", view: "#"},
            {id: 19, name: "Project 19", email:"exampkle19@example.org", edit: "#", view: "#"},
            {id: 20, name: "Project 20", email:"exampkle20@example.org", edit: "#", view: "#"},
            {id: 21, name: "Project 21", email:"exampkle21@example.org", edit: "#", view: "#"},
            {id: 22, name: "Project 22", email:"exampkle22@example.org", edit: "#", view: "#"},
            {id: 23, name: "Project 23", email:"exampkle23@example.org", edit: "#", view: "#"},
            {id: 24, name: "Project 24", email:"exampkle24@example.org", edit: "#", view: "#"},
            {id: 25, name: "Project 25", email:"exampkle25@example.org", edit: "#", view: "#"},
            {id: 26, name: "Project 26", email:"exampkle26@example.org", edit: "#", view: "#"},
            {id: 27, name: "Project 27", email:"exampkle27@example.org", edit: "#", view: "#"},
            {id: 28, name: "Project 28", email:"exampkle28@example.org", edit: "#", view: "#"},
            {id: 29, name: "Project 29", email:"exampkle29@example.org", edit: "#", view: "#"},
            {id: 30, name: "Project 30", email:"exampkle30@example.org", edit: "#", view: "#"},
            {id: 31, name: "Project 31", email:"exampkle31@example.org", edit: "#", view: "#"},
            {id: 32, name: "Project 32", email:"exampkle32@example.org", edit: "#", view: "#"},
            {id: 33, name: "Project 33", email:"exampkle33@example.org", edit: "#", view: "#"},
            {id: 34, name: "Project 34", email:"exampkle34@example.org", edit: "#", view: "#"},
            {id: 35, name: "Project 35", email:"exampkle35@example.org", edit: "#", view: "#"},
            {id: 36, name: "Project 36", email:"exampkle36@example.org", edit: "#", view: "#"},
            {id: 37, name: "Project 37", email:"exampkle37@example.org", edit: "#", view: "#"},
            {id: 38, name: "Project 38", email:"exampkle38@example.org", edit: "#", view: "#"},
            {id: 39, name: "Project 39", email:"exampkle@39example.org", edit: "#", view: "#"},
            {id: 40, name: "Project 40", email:"exampkle@40example.org", edit: "#", view: "#"}
    ];
        $scope.tableParams = new ngTableParams({
            page: 1,
            count: 10
        }, {
            total: data.length,
            getData: function($defer, params){
                $defer.resolve(data.slice((params.page() - 1) * params.count(), params.page() * params.count()));
            }
        });

//        $scope.projects = data;
}]);