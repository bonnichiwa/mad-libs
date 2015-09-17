angular.module('myApp', [])
  .controller('myCtrl', function($scope) {

    $scope.words = [{"name": "female name"},
                    {"job": "job title"},
                    {"task": "tedious task"},
                    {"task2": "dirty task"},
                    {"mentor": "celebrity"},
                    {"skill": "useless skill"},
                    {"adj": "adjective"},
                    {"celebrity": "obnoxious celebrity"},
                    {"number": "huge number"}]
});