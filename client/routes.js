var abrdgd = angular.module('abrdgd', ['ui.router']);

abrdgd.config(function($stateProvider) { // Angular requires this config block to register injected provider within block

  var aState = {
    name: 'first',
    url: '/just-a-long-url',
    template: '<h3>I\'m the first state!</h3>'
  }

  var bState = {
    name: 'second',
    url: '/shorty',
    template: '<h3>I\'m the other guy!</h3>'
  }

  $stateProvider.state(aState);
  $stateProvider.state(bState);

});