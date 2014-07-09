'use strict';

/**
 * @ngdoc function
 * @name soundboardApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the soundboardApp
 */
angular.module('soundboardApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
