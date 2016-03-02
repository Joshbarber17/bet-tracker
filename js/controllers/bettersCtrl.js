angular.module('betTrack').controller('bettersCtrl', function($scope, $firebaseArray, bettersRef, fb){
  $scope.betters = $firebaseArray(bettersRef)
  $scope.newBetter = function(firstName, lastName, phone, payId) {
    $scope.betters.$add({
      firstName: firstName,
      lastName: lastName,
      phone: phone,
      payId: payId,
      bets: {
      }
    })
    $scope.firstName = '';
    $scope.lastName = '';
    $scope.phone='';
    $scope.payId='';
  }
  $scope.deleteBetter = function(better) {
    if (confirm('Are you sure you want to remove this better?')) {
        $scope.betters.$remove(better);
    }
    else {
    }
  }
})
