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
        'question':'How much programming experience do you have?',
        'description':'',
        'options':[
          {
            'img':'',
            'caption':'Cant write a line of code, aka got no skills',
            'alt':'no skills'
          },
          {
            'img':'',
            'caption':'Eh, somewhere in between',
            'alt':'in between'
          }
          {
            'img':'',
            'caption':'Made a sick app or website',
            'alt':'sick app'
          },
        ]
      },
      {
        'question':'What kind of programming are you interested in?',
        'description':'',
        'options':[
          {
            'img':'',
            'caption':'Apps and Websites',
            'alt':'apps and webs'
          },
          {
            'img':'',
            'caption':'Systems',
            'alt':'sys'
          },
          {
            'img':'',
            'caption':'Hardware',
            'alt':'hardware'
          }
        ]
      },
      {
        'question':'Do you have a programming job currently or soon to start?',
        'description':'',
        'options':[
          {
            'img':'',
            'caption':'Nope',
            'alt':'no'
          },
          {
            'img':'',
            'caption':'Sure do',
            'alt':'yes'
          }
        ]
      },
      {
        'question':'Do you want a college experience?',
        'description':'',
        'options':[
          {
            'img':'',
            'caption':'I don\'t really care',
            'alt':'no'
          },
          {
            'img':'',
            'caption':'Yes',
            'alt':'yes'
          }
        ]
      },
      {
        'question':'You got enough money to put you through college?',
        'description':'',
        'options':[
          {
            'img':'',
            'caption':'I\'m broke',
            'alt':'no'
          },
          {
            'img':'',
            'caption':'Got some, but probably not',
            'alt':'maybe'
          },
          {
            'img':'',
            'caption':'Yeah I got the dough',
            'alt':'yes'
          }
        ]
      },
      {
        'question':'Does working for a company excite you?',
        'description':'',
        'options':[
          {
            'img':'',
            'caption':'Not at the moment',
            'alt':'no'
          },
          {
            'img':'',
            'caption':'Yessssssir',
            'alt':'yes'
          }
        ]
      },
      
      
      {
        'question':'Are you a creative who loves to problem solve?',
        'description':'',
        'options':[
          {
            'img':'',
            'caption':'Not so much',
            'alt':'no'
          },
          {
            'img':'',
            'caption':'Duh',
            'alt':'yes'
          },
        ]
      },
      {
        'question':'What is your reaction when thinking of the future?',
        'description':'',
        'options':[
          {
            'img':'',
            'caption':'We all gonna die!',
            'alt':'no'
          },
          {
            'img':'',
            'caption':'Ohhhh that’s exciting',
            'alt':'yes'
          }
        ]
      }
    ]

  });
