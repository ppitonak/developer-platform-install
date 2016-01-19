'use strict'

function customer() {
  return {
    restrict: 'E',
    replace: true,
    // template: '<div>xxx {{name}}</div>'
    templateUrl: 'directives/customer.html'
  }
}

export default customer;
