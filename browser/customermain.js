'use strict';

import angular from 'angular';
import customerCtrl from './customer';
import customerDir from './directives/customer';

let mainModule = angular.module('customerApp', [])
.controller(customerCtrl.name, customerCtrl)
.directive('myCustomer', customerDir);

export default mainModule;
