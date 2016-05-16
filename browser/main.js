'use strict';

import angular from 'angular';
import routes from './config/routes';
import controllers from './controllers/controllers';
import directives from './directives/directives';
import services from './services/services';

let mainModule = angular.module('devPlatInstaller',
  [
    'App.Controllers',
    'App.Directives',
    'App.Services',
    'App.Routes'
  ]
);

export default mainModule;
