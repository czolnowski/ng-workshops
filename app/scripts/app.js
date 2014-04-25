'use strict';

angular.module('ngWorkshopsApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ngMockE2E'
])
  .config(function ($routeProvider) {
    $routeProvider
        .when('/project/:project_id/issue/:id', {
            templateUrl: 'views/issues/detail_view.html',
            controller: 'IssueDetailViewCtrl'
        })
      .otherwise({
        redirectTo: '/'
      });
  }).run(['$httpBackend',
    function ($httpBackend) {
        $httpBackend.whenGET(/\.html$/).passThrough();
    }
]);
