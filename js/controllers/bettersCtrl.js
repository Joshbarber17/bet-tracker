angular.module('betTrack').controller('bettersCtrl', function($scope){
  $scope.array = [];
  $scope.newBetter = function(firstName, lastName, phone, payId) {
    $scope.array.push({
      firstName: firstName,
      lastName: lastName,
      phone: phone,
      payId: payId
    })
  }
  
})
