angular.module('roster', [
  "ngStorage"
])
.controller('MainCtrl', function($scope, $localStorage) {
  // $scope.players = [
  $scope.$storage = $localStorage;
  $scope.$storage = [{num: 09, last: 'Brees', first: 'Drew', pos: 'QB'}];
  // $scope.$storage = [
  //   // {num: 09, last: 'Brees', first: 'Drew', pos: 'QB'},
  //   // {num: 1, last: 'Murray', first: 'Kyler', pos: 'QB'},
  //   // {num: 2, last: 'Noil', first: 'Speedy', pos: 'WR'},
  //   // {num: 3, last: 'Kirk', first: 'Christian', pos: 'WR'},
  // ];
  // $scope.players = $scope.$storage;
  $scope.addPlayer = function() {
    $scope.$storage.push({num: $scope.num, last: $scope.last, first: $scope.first, pos: $scope.pos});
    $scope.num = '';
    $scope.last = '';
    $scope.first = '';
    $scope.pos = '';
  };

  $scope.removePlayer = function(player) {
    for (var i = 0; i < $scope.$storage.length; i++) {
      if ($scope.$storage[i] === player) {
        $scope.$storage.splice(i, 1);
      }
    }

    // var index = $scope.players.indexOf(item);
  };
});
