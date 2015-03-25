'use strict';

var tagboardController = angular.module('tag-board', []);

tagboardController.controller('tagboardCtrl', function ($http, $scope) {
  $http.get('tabledata'+'.json').success(function(data) {
      $scope.tag_list = data;
    });
});
