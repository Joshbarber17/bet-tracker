angular.module('betTrack').controller('satisfiedCtrl', function($scope, satisfiedRef, $firebaseArray, $stateParams){
  $scope.thisBetter = $stateParams
  $scope.satisfiedBets = $firebaseArray(satisfiedRef)
  $scope.deleteBet = function(bet) {
    if (confirm('Are you sure you want to remove this bet?')) {
        $scope.satisfiedBets.$remove(bet);
    }
    else {
    }
  }
  console.log($scope.thisBetter)
})
