'use strict';

import angular from 'angular';
import counter from './directives/counter';

// function MyController($scope) {
//   $scope.counter = 0;
// }
//
// MyController.$inject = ['$scope'];


var app = angular.module('myApp', ['ng'])
  .directive('counter', counter)
  .controller('MyController', ['$scope', function($scope) {
    $scope.counter = 0;
  }]);

export default app;
