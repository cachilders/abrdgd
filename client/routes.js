var abrdgd = angular.module('abrdgd', ['ui.router']);

abrdgd.config(function($stateProvider, $urlRouterProvider) { // Angular requires this config block to register injected provider within block

  $stateProvider

  .home = {
    name: 'home',
    url: '/',
    views: {
      '': {
        template: '<h3>I\'m the home view!</h3>'
      }
    }
  }

  .about = {
    name: 'about',
    url: '/about',
    views: {
      'about': {
        template:'<h3>I\'m the about view!</h3>'
      }
    }
  }

  $urlRouterProvider.otherwise('/');

});