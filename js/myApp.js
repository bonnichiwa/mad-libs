angular.module('myApp', ['ngAnimate'])

  .controller('myCtrl', function($scope) {

    var defaultForm = {
      name : "",
      data : "",
      task : "",
      task2: "",
      mentor: "",
      skill: "",
      adj: "",
      celebrity: "",
      number: ""
    }

    $scope.data = angular.copy(defaultForm);

    $scope.reset = function() {
      $scope.genderClicked = false;
      $scope.gender = 'pick a gender';
      $scope.wordsForm.$setPristine();
      $scope.data = angular.copy(defaultForm);
      console.log('empty');
    }

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

    $scope.showStory = false;

    $scope.blanks = true;

    $scope.submit = function(){
    };
  });

  