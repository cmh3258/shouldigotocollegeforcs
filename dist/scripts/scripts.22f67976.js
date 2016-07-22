"use strict";angular.module("shouldigotocollegeforcsApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","angulartics","angulartics.google.analytics"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("shouldigotocollegeforcsApp").controller("MainCtrl",["$scope","$analytics",function(a,b){a.highestAnswerLetter=null,a.questions=[{question:"How much programming experience do you have?",description:"",showing:!0,options:[{img:"detective.png",caption:"No skills",alt:"no skills",answer:"E"},{img:"route.png",caption:"Eh, in between",alt:"in between",answer:"C"},{img:"computer-1.png",caption:"Quite a lot",alt:"sick app",answer:"B"}]},{question:"What kind of programming are you interested in?",description:"",showing:!1,options:[{img:"browser.png",caption:"Apps and Websites",alt:"apps and webs",answer:"D"},{img:"smartwatch.png",caption:"Systems",alt:"sys",answer:"C"},{img:"motherboard.png",caption:"Hardware",alt:"hardware",answer:"C"}]},{question:"Do you have a programming job currently or soon to start?",description:"",showing:!1,options:[{img:"tired.png",caption:"Nope",alt:"no",answer:"B"},{img:"employee.png",caption:"Sure do",alt:"yes",answer:"A"}]},{question:"Do you want a college experience?",description:"",showing:!1,options:[{img:"sleep.png",caption:"I don't really care",alt:"no",answer:"D"},{img:"pint.png",caption:"Yes",alt:"yes",answer:"C"}]},{question:"You got enough money to put you through college?",description:"",showing:!1,options:[{img:"coins.png",caption:"I'm broke",alt:"no",answer:"D"},{img:"money.png",caption:"Got some, but probably not",alt:"maybe",answer:"D,C"},{img:"strongbox.png",caption:"Yeah I got the dough",alt:"yes",answer:"C"}]},{question:"Does working for a company excite you?",description:"",showing:!1,options:[{img:"sleep-2.png",caption:"Not at the moment",alt:"no",answer:0},{img:"employees.png",caption:"Yessssssir",alt:"yes",answer:"B,A"}]},{question:"Are you a creative who loves to problem solve?",description:"",showing:!1,options:[{img:"calculator.png",caption:"Not so much",alt:"no",answer:"E"},{img:"puzzle.png",caption:"Duh",alt:"yes",answer:"B,D,C"}]},{question:"What is your reaction when thinking of the future?",description:"",showing:!1,options:[{img:"coffin.png",caption:"We all gonna die!",alt:"no",answer:"E"},{img:"future.png",caption:"Ohhhh that’s exciting",alt:"yes",answer:0}]}],a.answers={A:{title:"Stay at your job",img:"stay_job.svg",description:"If you love your job, stay at it. Take every opportunity to grow and learn from those who are above you and leading you."},B:{title:"Go get a job",img:"get_job.svg",description:"You have the skills, you are determined and love developing, puts those to use. Plus, get that money!"},C:{title:"College!",img:"college.svg",description:"If you desire the college experience, then you should do it. College is great and will grow you tremendously."},D:{title:"Dev School",img:"dev_school.svg",description:"There are many school's you can go to that are less expensive than college, but can teach you the necessary skills to get you a developer position. Some online, and some in your local area. Check out a few below."},E:{title:"This might not be for you",img:"other_job.svg",description:"Not everyone has to be a programmer. We need architects, cooks, salesmen, CEO's, and so much more. You do you, and change the world."}},a.restart=function(){a.highestAnswerLetter=null,d={A:0,B:0,C:0,D:0,E:0},a.start=!1,c=0,a.questions[0].showing=!0};var c=0,d={A:0,B:0,C:0,D:0,E:0};a.submitAnswer=function(e){if(0==e);else if(e.indexOf(",")>-1)for(var f=e.split(","),g=0;g<f.length;g++)0!=f[g]&&(d[f[g]]+=1);else d[e]+=1;if(a.questions[c].showing=!1,c+=1,a.questions.length==c){var h=0,i="D";for(var j in d)d[j]>h&&(h=d[j],i=j);console.log(d),2==d.A?(a.highestAnswerLetter=a.answers.A,b.eventTrack("answer",{letter:"A"})):(a.highestAnswerLetter=a.answers[i],b.eventTrack("answer",{letter:i}))}else a.questions[c].showing=!0}}]),angular.module("shouldigotocollegeforcsApp").controller("AboutCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]);