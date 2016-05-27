'use strict';

import angular from 'angular';

import main from 'newmain';

describe('counterDirective', function() {
  let injector;
  let element;
  let scope;

  beforeEach(function() {
    // Create a new dependency injector using the 'myApp' module
    injector = angular.injector(['myApp']);

    injector.invoke(function($rootScope, $compile) {
      // Get a new scope
      scope = $rootScope.$new();

      // Compile some HTML that uses the directive
      element = $compile(angular.element('<counter></counter>'))(scope);
      // not sure what is the difference
      // scope.$apply();
      scope.$digest();
    });
  });

  it('increments counter when you click', function() {
    expect(element.text()).toBe('You\'ve clicked this div 0 times');
    element.find('div').triggerHandler('click');
    expect(element.text()).toBe('You\'ve clicked this div 1 times');
    element.find('div').triggerHandler('click');
    expect(element.text()).toBe('You\'ve clicked this div 2 times');
  });
});
