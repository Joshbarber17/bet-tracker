angular.module('betTrack', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/')
  $stateProvider
  .state('betters', {
    url: '/betters',
    templateUrl: 'views/betters.html',
    controller: 'bettersCtrl'
  })
  .state('bets', {
    url: '/bets',
    templateUrl: 'views/bets.html',
    controller: 'betsCtrl'
  })
  .state('satisfied', {
    url: '/satisfied',
    templateUrl: 'views/satisfied.html',
    controller: 'satisfiedCtrl'
  })
})
