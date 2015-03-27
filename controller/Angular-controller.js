'use strict';

var tagboardController = angular.module('tag-board', []);

tagboardController.controller('tagboardCtrl', ['$http','$scope',
  function ($http, $scope) {
  $http.get('controller/tabledata.json').success(function(data) {
      $scope.tag_list = data;
    });
}]);

// tagboardController.controller('listagCtrl', ['$http','$scope',
//   function ($http, $scope) {
//  $http.get('controller/table-description.json').success(function(data){
//     $scope.tag_lists_data=data;
//    });
// }]);

// tagboardController.controller('list-search',function ($http , $scope){
//  $http.get('table-description'+'.json').sucess(function(data){
//     $scope.tag-lists -data;
//  });

