'use strict';

angular.module('ngWorkshopsApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ngMockE2E',
  'ngTable',
  'ui.bootstrap'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/projects/index.html',
        controller: 'ProjectsCtrl'
      })
      .when('/project/edit/:id', {
            templateUrl: 'views/projects/edit.html',
            controller: 'ProjectsEditCtrl'
      })
      .when('/project/new/', {
            templateUrl: 'views/projects/new.html',
            controller: 'ProjectsNewCtrl'
      })
      .when('/project/:project_id/issue/:id', {
            templateUrl: 'views/issues/detail_view.html',
            controller: 'IssueDetailViewCtrl'
      })
      .when('/project/:id', {
        templateUrl: 'views/issues/index.html',
        controller: 'IssuesCtrl'
      })
      .when('/project/:id/issues', {
        templateUrl: 'views/issues/add.html',
        controller: 'IssuesAddCtrl'
      })
      .when('/project/:id', {
        templateUrl: 'views/issues/index.html',
        controller: 'IssuesCtrl'
      })
      .when('/project/:id/issues', {
        templateUrl: 'views/issues/add.html',
        controller: 'IssuesAddCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).run(['$httpBackend',
    function ($httpBackend) {
        $httpBackend.whenGET(/\.html$/).passThrough();
    }
]);
