'use strict'

import angular from 'angular';

function progressBar() {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      productName: '=',
      productVersion: '=',
      productDesc: '=',
      current: '=',
      min: '=',
      max: '=',
      label: '=',
      status: '='
    },
    template:
    [`
    <div class="panel panel-default">
      <div class="panel-heading">
        <div class="product-container">
          <div>
            <div class="progress-description">
              <span class="product-name">{{productName}}</span><span class="product-version">{{productVersion}}</span> - <span class="product-version">{{status}}</span>
              <div>{{productDesc}}</div>
            </div>
            <div class="progress progress-label-top-right">
              <div class="progress-bar" role="progressbar" aria-valuenow="{{current}}" aria-valuemin="{{min}}" aria-valuemax="{{max}}" style="width: {{current}}%;">
                <span>{{label}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    `].join('')
  }
}

angular.module('devPlatInstaller').directive(progressBar.name, ['$state', progressBar]);

export default progressBar;
