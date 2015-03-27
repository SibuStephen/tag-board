'use strict';

var tagboardController = angular.module('tag-board', []);

tagboardController.controller('tagboardCtrl', function ($http, $scope) {
  $http.get('controller/tabledata.json').success(function(data) {
      $scope.tag_list = data;
    });
});

tagboardController.controller('list-of-tags',function ($http , $scope){
 $http.get('table-description'+'.json').sucess(function(data){
    $scope.tag-lists-data;
 });
});

// tagboardController.controller('list-search',function ($http , $scope){
//  $http.get('table-description'+'.json').sucess(function(data){
//     $scope.tag-lists -data;
//  });

