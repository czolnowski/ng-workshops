'use strict';

angular.module('ngWorkshopsApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ngTable'
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
      .otherwise({
        redirectTo: '/'
      });
  });
