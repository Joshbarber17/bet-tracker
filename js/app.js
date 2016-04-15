angular.module('betTrack', ['ui.router', 'firebase'])
.constant('fb', {url: 'https://bettrack.firebaseio.com/'})
.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/betters')
  $stateProvider
  .state('betters', {
    url: '/betters',
    templateUrl: 'views/betters.html',
    controller: 'bettersCtrl',
    resolve: {
      bettersRef: function(bettersService) {
        return bettersService.getBetters();
      }
    }
  })
  .state('bets', {
    url: '/bets?betterId&betterFirstName',
    templateUrl: 'views/bets.html',
    controller: 'betsCtrl',
    resolve: {
      betRef: function(bettersService, $stateParams) {
        return bettersService.getBet($stateParams.betterId);
      },
      satisfiedRef: function(bettersService, $stateParams) {
        return bettersService.satisfyBet($stateParams.betterId);
      }
    }
  })
  .state('satisfied', {
    url: '/satisfied?betterId&betterFirstName',
    templateUrl: 'views/satisfied.html',
    controller: 'satisfiedCtrl',
    resolve: {
      satisfiedRef: function(bettersService, $stateParams) {
        return bettersService.satisfyBet($stateParams.betterId);
      }
    }
  })
})
