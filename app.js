(function () {
  'use strict';
  angular.module('myFirstApp', [])
.controller('MyFirstController', function($scope){
  $scope.name = "sergo";
  $scope.sayHello = function(){
    return "cursera";
  };
  });
})();
