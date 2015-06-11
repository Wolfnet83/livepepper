var livepepper = angular.module('livepepper', ['dndLists']);

livepepper.controller("mainController", ['$scope','$http',
  function($scope, $http){

    $scope.addCategory = function(){
      $http.post('/category.json', {name: $scope.cat_name})
        .success(function(data) {
          $scope.categories.category.push(data.category);
        });
    };

    $scope.deleteCategory = function(cat){
      $http.delete('/category/' + cat.id + '.json')
        .success(function(data) {
          $scope.categories.category.splice($scope.categories.category.indexOf(cat),1);
        });
    };

    $scope.addProduct = function(name, desc, price, cat_id){
      $http.post('/category/'+cat_id+'/product', {name: name, description: desc, price: price})
        .success(function(data) {
          $scope.loadCategories();
        });
    };

    $scope.loadCategories = function(){
      $http.get('/category?format=json')
        .success(function(data) {
          $scope.categories = data;
        });
    };

    $scope.dropHere = function(product, cat_id){
      $http.put('/category/' + cat_id + '/product', {product_id: product.id})
        .success(function(){
        });
      return(product);
    };

  }]);
