'use strict';

import angular from 'angular';
import base64 from 'angular-base64';
import acctCtrl from '../pages/account/controller';
import locCtrl from '../pages/location/controller';
import confCtrl from '../pages/confirm/controller';
import instCtrl from '../pages/install/controller';
import startCtrl from '../pages/start/controller';

let controllers = angular.module('App.Controllers', ['base64'])
  .controller(acctCtrl.name, acctCtrl)
  .controller(locCtrl.name, locCtrl)
  .controller(confCtrl.name, confCtrl)
  .controller(instCtrl.name, instCtrl)
  .controller(startCtrl.name, startCtrl);

export default controllers;
