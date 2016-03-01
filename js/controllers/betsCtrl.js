angular.module('betTrack').controller('betsCtrl', function($scope, $stateParams, $firebaseArray, betRef, $firebaseObject){
  $scope.bets = $firebaseArray(betRef);
  $scope.userobj = $firebaseObject(betRef)
  $scope.newBet = function(betDate, betAmount, betDescription) {
    $scope.bets.$add ({
        betDate: betDate,
        betAmount: betAmount,
        betDescription: betDescription
    })
  }
  // $scope.satisfy = function() {
  //
  // }
})
