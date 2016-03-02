angular.module('betTrack').service('bettersService', function(fb){
  var firebaseRef = new Firebase('https://bettrack.firebaseio.com/');
  this.getBetters = function(){
    return new Firebase(fb.url + '/betters');
  };
  this.getBet = function(betterId) {
    return new Firebase(fb.url + '/betters/' + betterId + '/bets');
  };
  this.satisfyBet = function(betterId) {
    return new Firebase(fb.url + '/betters/' + betterId + '/satisfied')
  }
})
