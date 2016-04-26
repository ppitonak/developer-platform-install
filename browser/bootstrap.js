import mainModule from './main';
import acctCtrl from './pages/account/controller';
import locCtrl from './pages/location/controller';
import confCtrl from './pages/confirm/controller';
import instCtrl from './pages/install/controller';
import startCtrl from './pages/start/controller';
import pathValidator from './directives/pathValidator';
import progressBar from './directives/progressBar';
import breadcrumb from './directives/breadcrumb';
// import InstallerDataService from './services/data';
// import VirtualBoxInstall from './model/virtualbox';
// import JdkInstall from './model/jdk-install';
// import JbdsInstall from './model/jbds';
// import VagrantInstall from './model/vagrant';
// import CygwinInstall from './model/cygwin';
// import CDKInstall from './model/cdk';

angular.element(document).ready(function() {
  angular.bootstrap(document, [mainModule.name], { strictDi: true });
});
