'use strict'

const os = require('os');

class CustomerController {
  constructor($scope) {
    this.scope = $scope;
    this.scope.name = 'Naomi';
    this.scope.address = '100 Amphitheatre';
  }
}

CustomerController.$inject = ['$scope'];

export default CustomerController;
