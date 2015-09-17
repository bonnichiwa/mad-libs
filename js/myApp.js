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

    $scope.male = function() {
      $scope.gender = 'boy';
      $scope.gender1 = 'he';
      $scope.gender2 = 'his';
      $scope.gender3 = 'him'
    };

    $scope.female = function() {
      $scope.gender = 'girl';
      $scope.gender1 = 'she';
      $scope.gender2 = 'her';
      $scope.gender3 = 'her';
    };
});