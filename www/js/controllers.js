angular.module('starter.controllers', [])

  .controller('DashCtrl', function ($scope, ipCookie, $injector, $ionicViewSwitcher) {
    // ipCookie("name", "test111")

    // $scope.cookie = ipCookie("name")
    // console.log($scope.cookie)

    $scope.changeTabRight = function () {
      $injector.get('$ionicHistory').clearHistory()
      $injector.get('$state').transitionTo("tab.chats")
      $ionicViewSwitcher.nextDirection("forward")
    }
    $scope.changeTabLeft = function () {
      $injector.get('$ionicHistory').clearHistory()
      $injector.get('$state').transitionTo("tab.chats")
      $ionicViewSwitcher.nextDirection("back")
    }

  })

  .controller('ChatsCtrl', function ($scope, Chats) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    $scope.$on('$ionicView.enter', function () {
      console.log("enter");
    });

    $scope.$on('$ionicView.loaded', function () {
      console.log("loaded");
    });

    $scope.$on('$ionicView.leave', function () {
      console.log("leave");
    });

    $scope.$on('$ionicView.beforeEnter', function () {
      console.log("beforeEnter");
    });

    $scope.$on('$ionicView.beforeLeave', function () {
      console.log("beforeLeave");
    });

    $scope.$on('$ionicView.afterEnter', function () {
      console.log("afterEnter");
    });

    $scope.$on('$ionicView.afterLeave', function () {
      console.log("afterLeave");
    });

    $scope.$on('$ionicView.unloaded', function () {
      console.log("unloaded");
    });

    $scope.chats = Chats.all();
    $scope.remove = function (chat) {
      Chats.remove(chat);
    };
  })

  .controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
    console.log($scope.chat)
  })

  .controller('AccountCtrl', function ($scope) {
    $scope.settings = {
      enableFriends: true
    };
  });
