angular.module('myApp', [])
  .controller('myCtrl', function($scope) {

    $scope.words = [{"name": "name"},
                    {"job": "job title"},
                    {"task": "tedious task"},
                    {"task2": "dirty task"},
                    {"mentor": "celebrity"},
                    {"skill": "useless skill"},
                    {"adj": "adjective"},
                    {"celebrity": "obnoxious celebrity"},
                    {"number": "huge number"}];

    $scope.gender = 'pick a gender';
    $scope.genderClicked = false;

    $scope.male = function() {
      $scope.genderClicked = true;
      $scope.gender = 'boy';
      $scope.gender1 = 'he';
      $scope.gender2 = 'his';
      $scope.gender3 = 'him';
      if ($scope.genderClicked == true) {
        console.log("You picked a boy, thank you!");
      }
    };

    $scope.female = function() {
      $scope.genderClicked = true;
      $scope.gender = 'girl';
      $scope.gender1 = 'she';
      $scope.gender2 = 'her';
      $scope.gender3 = 'her';
      if ($scope.genderClicked == true) {
        console.log("You picked a girl, thank you!");
      }
    };

    $scope.showStory = true;

    $scope.blanks = true;

    $scope.submit = function(){
    };
});