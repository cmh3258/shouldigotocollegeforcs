'use strict';

/**
 * @ngdoc function
 * @name shouldigotocollegeforcsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the shouldigotocollegeforcsApp
 */
angular.module('shouldigotocollegeforcsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];


    $scope.questions = [
      {
        'question':'',
        'description':'',
        'options':[
          {
            'img':'',
            'caption':'',
            'alt':''
          }
        ]
      },
      {
        'question':'',
        'description':'',
        'options':[
          {
            'img':'',
            'caption':'',
            'alt':''
          }
        ]
      }
    ]

  });
