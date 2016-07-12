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
            'img':'detective.png',
            'caption':'Cant write a line of code, aka got no skills', //computer crossed out
            'alt':'no skills'
          },
          {
            'img':'route.png',
            'caption':'Eh, somewhere in between', //in between computer and something
            'alt':'in between'
          },
          {
            'img':'computer-1.png',
            'caption':'Made a sick app or website', //shows web and phone
            'alt':'sick app'
          },
        ]
      },
      {
        'question':'What kind of programming are you interested in?',
        'description':'',
        'options':[
          {
            'img':'browser.png',
            'caption':'Apps and Websites', //shows web and phone
            'alt':'apps and webs'
          },
          {
            'img':'smartwatch.png',
            'caption':'Systems',  //nasa, tesla, etc.
            'alt':'sys'
          },
          {
            'img':'motherboard.png',
            'caption':'Hardware', //hardware
            'alt':'hardware'
          }
        ]
      },
      {
        'question':'Do you have a programming job currently or soon to start?',
        'description':'',
        'options':[
          {
            'img':'tired.png',
            'caption':'Nope', //lonely on a bench
            'alt':'no'
          },
          {
            'img':'employee.png',
            'caption':'Sure do', //at comp working
            'alt':'yes'
          }
        ]
      },
      {
        'question':'Do you want a college experience?',
        'description':'',
        'options':[
          {
            'img':'sleep.png',
            'caption':'I don\'t really care', //too cool
            'alt':'no'
          },
          {
            'img':'pint.png',
            'caption':'Yes', //grad cap
            'alt':'yes'
          }
        ]
      },
      {
        'question':'You got enough money to put you through college?',
        'description':'',
        'options':[
          {
            'img':'coins.png',
            'caption':'I\'m broke', //money crossed out
            'alt':'no'
          },
          {
            'img':'money.png',
            'caption':'Got some, but probably not', //one dollar
            'alt':'maybe'
          },
          {
            'img':'strongbox.png',
            'caption':'Yeah I got the dough', //stacks
            'alt':'yes'
          }
        ]
      },
      {
        'question':'Does working for a company excite you?',
        'description':'',
        'options':[
          {
            'img':'sleep-2.png',
            'caption':'Not at the moment', //sad face
            'alt':'no'
          },
          {
            'img':'employees.png',
            'caption':'Yessssssir', //happy face
            'alt':'yes'
          }
        ]
      },
      {
        'question':'Are you a creative who loves to problem solve?',
        'description':'',
        'options':[
          {
            'img':'calculator.png',
            'caption':'Not so much', //boring person
            'alt':'no'
          },
          {
            'img':'puzzle.png',
            'caption':'Duh', //fun person
            'alt':'yes'
          },
        ]
      },
      {
        'question':'What is your reaction when thinking of the future?',
        'description':'',
        'options':[
          {
            'img':'coffin.png',
            'caption':'We all gonna die!', //doom
            'alt':'no'
          },
          {
            'img':'future.png',
            'caption':'Ohhhh that’s exciting', //future
            'alt':'yes'
          }
        ]
      }
    ]

  });
