'use strict';

import angular from 'angular';
import ngMock from 'angular-mocks';
import main from 'browser/customermain';
import customerCtrl from 'browser/customer';

describe('customer directive', function(){

  var scope, controller, element;

  beforeEach(angular.mock.module('customerApp'));

  beforeEach(angular.mock.module('directives/customer.html'));

  beforeEach(angular.mock.inject(function($rootScope, $compile, $controller) {
    scope = $rootScope.$new();
    // scope.name = 'Naomi';
    controller = $controller(customerCtrl.name, { $scope: scope });
    element = angular.element('<my-customer></my-customer>');
    element = $compile(element)(scope);
    $rootScope.$digest();
  }));

  it('dummy x', function() {
    // expect(1+1).toBe(2);
    expect(element.text()).toEqual('xxx Naomia');
  });

  // describe('sum', function () {
  //   it('1 + 1 should equal 2', function () {
  //     $scope.x = 1;
  //     $scope.y = 3;
  //     $controller.sum();
  //     expect($scope.z).toBe(4);
  //   });
  // });

  // describe('platform', function () {
  //   it('should be linux', function () {
  //     $controller.platform();
  //     expect($scope.z).toBe('linux');
  //   });
  // });
})
