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
        'showing':true,
        'options':[
          {
            'img':'detective.png',
            'caption':'No skillz', //computer crossed out
            'alt':'no skills',
            'answer':'E'
          },
          {
            'img':'route.png',
            'caption':'Eh, in between', //in between computer and something
            'alt':'in between',
            'answer':'C,B'
          },
          {
            'img':'computer-1.png',
            'caption':'Made a sick app or website', //shows web and phone
            'alt':'sick app',
            'answer':'B'
          },
        ]
      },
      {
        'question':'What kind of programming are you interested in?',
        'description':'',
        'showing':false,
        'options':[
          {
            'img':'browser.png',
            'caption':'Apps and Websites', //shows web and phone
            'alt':'apps and webs',
            'answer':'D'
          },
          {
            'img':'smartwatch.png',
            'caption':'Systems',  //nasa, tesla, etc.
            'alt':'sys',
            'answer':'C'
          },
          {
            'img':'motherboard.png',
            'caption':'Hardware', //hardware
            'alt':'hardware',
            'answer':'C'
          }
        ]
      },
      {
        'question':'Do you have a programming job currently or soon to start?',
        'description':'',
        'showing':false,
        'options':[
          {
            'img':'tired.png',
            'caption':'Nope', //lonely on a bench
            'alt':'no',
            'answer':'B'
          },
          {
            'img':'employee.png',
            'caption':'Sure do', //at comp working
            'alt':'yes',
            'answer':'A'
          }
        ]
      },
      {
        'question':'Do you want a college experience?',
        'description':'',
        'showing':false,
        'options':[
          {
            'img':'sleep.png',
            'caption':'I don\'t really care', //too cool
            'alt':'no',
            'answer':'D'
          },
          {
            'img':'pint.png',
            'caption':'Yes', //grad cap
            'alt':'yes',
            'answer':'C'
          }
        ]
      },
      {
        'question':'You got enough money to put you through college?',
        'description':'',
        'showing':false,
        'options':[
          {
            'img':'coins.png',
            'caption':'I\'m broke', //money crossed out
            'alt':'no',
            'answer':'D'
          },
          {
            'img':'money.png',
            'caption':'Got some, but probably not', //one dollar
            'alt':'maybe',
            'answer':'D,C'
          },
          {
            'img':'strongbox.png',
            'caption':'Yeah I got the dough', //stacks
            'alt':'yes',
            'answer':'C'
          }
        ]
      },
      {
        'question':'Does working for a company excite you?',
        'description':'',
        'showing':false,
        'options':[
          {
            'img':'sleep-2.png',
            'caption':'Not at the moment', //sad face
            'alt':'no',
            'answer':0
          },
          {
            'img':'employees.png',
            'caption':'Yessssssir', //happy face
            'alt':'yes',
            'answer':'B,A'
          }
        ]
      },
      {
        'question':'Are you a creative who loves to problem solve?',
        'description':'',
        'showing':false,
        'options':[
          {
            'img':'calculator.png',
            'caption':'Not so much', //boring person
            'alt':'no',
            'answer':'E'
          },
          {
            'img':'puzzle.png',
            'caption':'Duh', //fun person
            'alt':'yes',
            'answer':'B,D,C'
          },
        ]
      },
      {
        'question':'What is your reaction when thinking of the future?',
        'description':'',
        'showing':false,
        'options':[
          {
            'img':'coffin.png',
            'caption':'We all gonna die!', //doom
            'alt':'no',
            'answer':'E'
          },
          {
            'img':'future.png',
            'caption':'Ohhhh that’s exciting', //future
            'alt':'yes',
            'answer':0
          }
        ]
      }
    ]

    $scope.restart = function(){
      $scope.highestAnswerLetter = null;
      answersDict = {'A':0, 'B':0, 'C':0, 'D':0, 'E':0};
      $scope.start = false;
    }

    var currentIndex = 0;
    var answersDict = {'A':0, 'B':0, 'C':0, 'D':0, 'E':0};
    $scope.submitAnswer = function (answer){
      if(answer == 0){
        //do nothing
      }
      else if (answer.indexOf(',') > -1){
        var answers = answer.split(',');
        for (var i=0; i < answers.length; i++){
          if (answers[i] != 0){
            answersDict[answers[i]] += 1
          }
        }
      }
      else{
        answersDict[answer] += 1
      }

      $scope.questions[currentIndex].showing = false;
      currentIndex += 1;
      if ($scope.questions.length == currentIndex){
        var highestAnswer = 0;
        var highestAnswerLetter = 'D';
        for (var key in answersDict){
          if (answersDict[key] > highestAnswer){
            highestAnswer = answersDict[key];
            highestAnswerLetter = key;
          }
        }
        console.log('highestAnswer = ', highestAnswer, highestAnswerLetter);
        $scope.highestAnswerLetter = highestAnswerLetter;
      }
      else{
        $scope.questions[currentIndex].showing = true;
      }
    }
  });

  

