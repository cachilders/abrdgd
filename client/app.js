angular.module('abrdgd', [
    'ui.router',
    'app.view1',
    'app.view2',
    'app.nested'
  ])

.config(function($stateProvider, $urlRouterProvider) { 

  $stateProvider

  .state('initial', {
    url: '/',
    views: {
      '': {
        templateUrl: 'views/view1/view1.html',
        controller: 'View1Controller'
      },
      'more@initial': {
        templateUrl: 'views/nested/nested.html',
        controller: 'NestedController'
      }
    }
  })

  .state('secondary', {
    url: '/view2/',
    views: {
      '': {
        templateUrl:'views/view2/view2.html',
        controller: 'View2Controller'
      },
      'more@secondary': {
        templateUrl: 'views/nested/nested.html',
        controller: 'NestedController'
      }
    }
  });

  $urlRouterProvider.otherwise('/');

});