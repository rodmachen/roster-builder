angular.module('roster', [

])
.controller('MainCtrl', function($scope) {
  $scope.players = [
    {num: 1, last: 'Murray', first: 'Kyler', pos: 'QB'},
    {num: 2, last: 'Noil', first: 'Speedy', pos: 'WR'},
    {num: 3, last: 'Kirk', first: 'Christian', pos: 'WR'},
  ];
  $scope.current = null;
  $scope.addPlayer = function() {
    $scope.players.push({num: $scope.num, last: $scope.last, first: $scope.first, pos: $scope.pos});
    $scope.num = '';
    $scope.last = '';
    $scope.first = '';
    $scope.pos = '';
  };
});
