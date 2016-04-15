angular.module('betTrack').directive('winLossDir', function(){
  return {
    retrict: "A",
    scope: {
      winner: '@betWinner',
      thisBetter: '@thisBetter'
    },
    link: function($scope, element, attributes) {
      if ($scope.winner === $scope.thisBetter) {
        element.css("color", "red");
      }
      else {
        element.css('color', 'green')
      }
    }
  }
})
