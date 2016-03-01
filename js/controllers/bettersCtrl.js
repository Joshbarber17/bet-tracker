angular.module('betTrack').controller('bettersCtrl', function($scope, $firebaseArray, bettersRef, fb){
  $scope.betters = $firebaseArray(bettersRef)
  $scope.newBetter = function(firstName, lastName, phone, payId) {
    $scope.betters.$add({
      firstName: firstName,
      lastName: lastName,
      phone: phone,
      payId: payId,
      bets: {
        firstName: firstName
      }
    })
  }
})
