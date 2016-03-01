angular.module('betTrack').directive('betsDir', function($scope){
  return {
    restrict: "E",
    templateUrl: 'views/bets.html',
    controller: 'js/controllers/betsCtrl.js'
  }
})
