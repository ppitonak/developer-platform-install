'use strict'

import angular from 'angular';

function counter() {
  return {
    // restrict: 'E',
    // replace: true,
    controller: 'MyController',
    template: '<div  ng-controller="MyController"' +
              '      ng-click="counter = counter + 1">' +
              'You\'ve clicked this div {{counter}} times' +
              '</div>'
  }
}

export default counter;
