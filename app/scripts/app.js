'use strict';

/**
 * @ngdoc overview
 * @name shouldigotocollegeforcsApp
 * @description
 * # shouldigotocollegeforcsApp
 *
 * Main module of the application.
 */
angular
  .module('shouldigotocollegeforcsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angulartics',
    'angulartics.google.analytics'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
