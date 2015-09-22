angular.module('roster', [
  'ngStorage',
])
.controller('MainCtrl', function($scope, $localStorage) {
  $scope.$storage = $localStorage;
  if (!$scope.$storage.players || $scope.$storage.players.length === 0) {
    localStorage.clear();
    $scope.$storage.players = [
      {num: 10, last: 'Allen', first: 'Kyle', pos: 'QB'},
      {num: 9, last: 'Brees', first: 'Drew', pos: 'QB'},
      // {num: 01, last: 'Murray', first: 'Kyler', pos: 'QB'},
      // {num: 02, last: 'Noil', first: 'Speedy', pos: 'WR'},
      // {num: 03, last: 'Kirk', first: 'Christian', pos: 'WR'}''
    ];
  }

  $scope.sortType     = 'num';
  $scope.sortReverse  = false;

  $scope.addPlayer = function() {
    $scope.$storage.players.push({num: $scope.num, last: $scope.last, first: $scope.first, pos: $scope.pos});
    $scope.num = '';
    $scope.last = '';
    $scope.first = '';
    $scope.pos = '';
  };

  $scope.removePlayer = function(player) {
    for (var i = 0; i < $scope.$storage.players.length; i++) {
      if ($scope.$storage.players[i] === player) {
        $scope.$storage.players.splice(i, 1);
      }
    }
  };

});
