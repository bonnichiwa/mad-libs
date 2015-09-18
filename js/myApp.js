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

    $scope.clicked = function () {
    if ($scope.genderclicked == true) {
      console.log("You picked a gender, thank you!");
    }
    }

    $scope.male = function() {
      $scope.genderClicked = true;
      $scope.gender = 'boy';
      $scope.gender1 = 'he';
      $scope.gender2 = 'his';
      $scope.gender3 = 'him'
    };

    $scope.female = function() {
      $scope.genderClicked = true;
      $scope.gender = 'girl';
      $scope.gender1 = 'she';
      $scope.gender2 = 'her';
      $scope.gender3 = 'her';
    };

    $scope.showStory = true;

    $scope.blanks = true;

    $scope.submit = function(){
    };
});