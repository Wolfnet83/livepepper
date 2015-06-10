var livepepper = angular.module('livepepper', ['dndLists']);

livepepper.controller("mainController", ['$scope','$http',
  function($scope, $http){

    $scope.loadCategories = function(){
      $http.get('/category')
        .success(function(data) {
          $scope.categories = data;
          console.log(data);
        });
    };

    $scope.loadProducts = function(){
      $http.get('/products/index')
        .success(function(data) {
          $scope.products = data;
          console.log(data);
        });
    };

  }]);
