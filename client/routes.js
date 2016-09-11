angular.module('abrdgd', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) { // Angular requires this config block to register injected provider within block

  $stateProvider

  .state('home', {
    url: '/',
    views: {
      '': {
        templateUrl: 'views/home.html',
        controller: function() {console.log('home')}
      }
    }
  })

  .state('about', {
    url: '/about/',
    views: {
      '': {
        templateUrl:'views/about.html',
        controller: function() {console.log('about')}
      }
    }
  });

  $urlRouterProvider.otherwise('/');

});