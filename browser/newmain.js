'use strict';

import angular from 'angular';
// import counter from './directives/counter';

// function MyController($scope) {
//   $scope.counter = 0;
// }
//
// MyController.$inject = ['$scope'];


var app = angular.module('myApp', ['ng'])
  .directive('counter', function () {
    return {
      // restrict: 'E',
      // replace: true,
      controller: 'MyController',
      template: '<div  ng-controller="MyController"' +
                '      ng-click="counter = counter + 1">' +
                'You\'ve clicked this div {{counter}} times' +
                '</div>'
    }
  })
  .controller('MyController', ['$scope', function($scope) {
    $scope.counter = 0;
  }]);

export default app;
