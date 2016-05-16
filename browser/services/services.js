'use strict';

import angular from 'angular';
import InstallerDataService from './data';
import VirtualBoxInstall from '../model/virtualbox';
import JdkInstall from '../model/jdk-install';
import JbdsInstall from '../model/jbds';
import VagrantInstall from '../model/vagrant';
import CygwinInstall from '../model/cygwin';
import CDKInstall from '../model/cdk';

let services = angular.module('App.Services', [])
  .factory('installerDataSvc', InstallerDataService.factory)
  .run( ['$rootScope', '$location', '$timeout', 'installerDataSvc', ($rootScope, $location, $timeout, installerDataSvc) => {
    let path = require('path');
    let fs = require('fs-extra');
    let reqs = null;
    let installersJsonForTests = path.resolve('./requirements.json');
    let installersJsonForRT = path.join(path.resolve('.'),'resources/app.asar/requirements.json');

    if(fs.existsSync(installersJsonForTests)) {
      reqs = require(installersJsonForTests);
    } else if ( fs.existsSync(installersJsonForRT) ) {
      reqs = require(installersJsonForRT);
    }

    installerDataSvc.addItemToInstall(
        VirtualBoxInstall.key(),
        new VirtualBoxInstall(
            reqs['virtualbox.exe'].version,
            reqs['virtualbox.exe'].revision,
            installerDataSvc,
            reqs['virtualbox.exe'].url,
            null,
            'virtualbox',
            reqs['virtualbox.exe'].sha256sum)
    );

    installerDataSvc.addItemToInstall(
        CygwinInstall.key(),
        new CygwinInstall(
            installerDataSvc,
            reqs['cygwin.exe'].url,
            null,
            'cygwin')
    );

    installerDataSvc.addItemToInstall(
        VagrantInstall.key(),
        new VagrantInstall(
            installerDataSvc,
            reqs['vagrant.msi'].url,
            null,
            'vagrant',
            reqs['vagrant.msi'].sha256sum)
    );

    installerDataSvc.addItemToInstall(
        CDKInstall.key(),
        new CDKInstall(
            installerDataSvc,
            $timeout,
            reqs['cdk.zip'].url,
            reqs['rhel-vagrant-virtualbox.box'].url,
            reqs['oc.zip'].url,
            null,
            'cdk')
    );

    installerDataSvc.addItemToInstall(
        JdkInstall.key(),
        new JdkInstall(
            installerDataSvc,
            reqs['jdk.zip'].url,
            null,
            reqs['jdk.zip'].prefix,
            'jdk8')
    );

    installerDataSvc.addItemToInstall(
        JbdsInstall.key(),
        new JbdsInstall(
            installerDataSvc,
            reqs['jbds.jar'].url,
            null,
            'developer-studio')
    );
  }]);

export default services;
