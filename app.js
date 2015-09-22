angular.module('roster', [

])
.controller('MainCtrl', function($scope) {
  $scope.players = [
    {num: 1, last: 'Murray', first: 'Kyler', pos: 'QB'},
    {num: 2, last: 'Noil', first: 'Speedy', pos: 'WR'},
    {num: 3, last: 'Kirk', first: 'Christian', pos: 'WR'},
  ];

  $scope.addPlayer = function() {
    $scope.players.push({num: $scope.num, last: $scope.last, first: $scope.first, pos: $scope.pos});
    $scope.num = '';
    $scope.last = '';
    $scope.first = '';
    $scope.pos = '';
  };

  $scope.removePlayer = function(player) {
    for (var i = 0; i < $scope.players.length; i++) {
      if ($scope.players[i] === player) {
        $scope.players.splice(i, 1);
      }
    }

    // var index = $scope.players.indexOf(item);
  };
});
