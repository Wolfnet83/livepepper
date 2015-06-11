var livepepper = angular.module('livepepper', ['dndLists']);

livepepper.controller("mainController", ['$scope','$http',
  function($scope, $http){

    $scope.loadCategories = function(){
      $http.get('/category?format=json')
        .success(function(data) {
          $scope.categories = data;
        });
    };

    $scope.dropHere = function(product, cat_id){
      console.log(product, cat_id);
      $http.put('/category/' + cat_id + '/product', {product_id: product.id})
        .success(function(){
          return(product);
        });
    };

  }]);
