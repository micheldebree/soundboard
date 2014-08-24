/*global angular*/
angular.module('soundboardApp', ['ngResource', 'soundboardService']).controller('MainCtrl', function ($scope, Soundboard) {
    'use strict';

    $scope.soundboard = Soundboard.get({
        id: 'lau.js'
    });

    $scope.soundboard.$promise.then(function (data) {
        $scope.sounds = data.sounds;
    });

});
