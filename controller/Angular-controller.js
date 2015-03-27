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

// tagboardController.controller('valueCtrl',function ($http , $scope , tagboardCtrl){
//  (function(tagboardCtrl ,data, tagboardCtrl){
//     $scope.tag-lists=data;
//     $scope.tag-lists.to_int();
//     return $scope.tag-lists;
//  });

