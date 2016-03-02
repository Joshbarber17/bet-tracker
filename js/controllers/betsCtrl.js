angular.module('betTrack').controller('betsCtrl', function($scope, $stateParams, $firebaseArray, betRef, satisfiedRef, $firebaseObject){
  $scope.bets = $firebaseArray(betRef);
  $scope.satisfiedBets = $firebaseArray(satisfiedRef)
  // $scope.betters = $firebaseArray(bettersRef);
  $scope.thisBetter = $stateParams;
  $scope.newBet = function(betDate, betAmount, betDescription) {
    $scope.bets.$add ({
        betDate: betDate,
        betAmount: betAmount,
        betDescription: betDescription
    })
    $scope.betDate = '';
    $scope.betAmount = '';
    $scope.betDescription = '';
  }
  $scope.deleteBet = function(bet) {
    if (confirm('Are you sure you want to remove this bet?')) {
        $scope.bets.$remove(bet);
    }
    else {
    }
  }
  $scope.showBox = false;
  $scope.satisfy = function(bet) {
    $scope.showBox = true;
    $scope.satisfyBet = function(betWinner, betAmount, datePaid, satisfiedDescription) {
      $scope.satisfiedBets.$add ({
        betWinner: betWinner,
        betAmount: betAmount,
        datePaid: datePaid,
        satisfiedDescription: satisfiedDescription
      })
      $scope.betWinner ='';
      $scope.betAmount = '';
      $scope.datePaid = '';
      $scope.satisfiedDescription = '';
      $scope.deleteBet(bet);
      $scope.showBox = false;
    }
  }

})
