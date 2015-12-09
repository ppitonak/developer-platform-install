'use strict'

class AccountController {
  constructor($state, $http, $base64, installerDataSvc) {
    this.router = $state;
    this.http = $http;
    this.base64 = $base64;
    this.installerDataSvc = installerDataSvc;

    this.username = "";
    this.password = "";
    this.authFailed = false;
    this.tandcNotSigned = false;
  }

  login() {
    this.authFailed = false;
    this.tandcNotSigned = false;

    var req = {
      method: 'GET',
      url: 'https://developers.redhat.com/download-manager/rest/tc-accepted?downloadURL=/file/cdk-2.0.0-beta3.zip',
      headers: {
        'Authorization': 'Basic ' + this.base64.encode(this.username + ':' + this.password)
      }
    };

    this.http(req)
      .then(result => {
        if (result.status == 200) {
          if (result.data == true) {
            this.installerDataSvc.setCredentials(this.username, this.password);
            this.router.go('confirm');
            return;
          } else if (result.data == false) {
            this.tandcNotSigned = true;
            return;
          }
        }
        this.authFailed = true;
      },
      failure => {
        this.authFailed = true;
      });
  }
}

AccountController.$inject = ['$state', '$http', '$base64', 'installerDataSvc'];

export default AccountController;