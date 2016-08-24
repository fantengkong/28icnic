angular.module('starter.controllers', [])
  .controller('contentCtrl', function ($scope) {
    $scope.doSomething = function () {
      console.log(0);
    };
    $scope.scrollAction = function () {
      console.log(0);
    };
    $scope.scrollEndAction = function () {
      console.log('scroll completed!');
    };
  })

  .controller('listCtrl', function ($scope, $ionicListDelegate) {
    $scope.list = [
      {
        title: 'item1',
        description: 'description item1'
      },
      {
        title: 'item2',
        description: 'description item2'
      },
      {
        title: 'item3',
        description: 'description item3'
      },
      {
        title: 'item4',
        description: 'description item4'
      },
      {
        title: 'item5',
        description: 'description item5'
      },
      {
        title: 'item6',
        description: 'description item6'
      },
      {
        title: 'item7',
        description: 'description item7'
      }
    ];

    $scope.showDelete = false;
    $scope.showDeleteButtons = function () {
      $scope.showDelete = !$scope.showDelete;
      // $ionicListDelegate.showDelete(true);
    };

    $scope.showReorder = false;
    $scope.showReorderButtons = function () {
      $scope.showReorder = !$scope.showReorder;
    }
    $scope.moveItem = function (item, from, to) {
      $scope.list.splice(from, 1);
      $scope.list.splice(to, 0, item);
    }
  })
