/*global angular*/
angular.module('soundboardApp', ['ngResource', 'soundboardService']).controller('MainCtrl', function ($scope, Soundboard) {
    'use strict';

    // colors to use for the soundbites
    var colors = ['804040', '408040', '404080', '808040', '804080', '408080', '808080'];
    
    $scope.soundboard = Soundboard.get({
        id: 'lau.js'
    });

    $scope.soundboard.$promise.then(function (data) {
        $scope.sounds = data.sounds;
        
        // assign colors to the soundbites
        var i = 0;
        angular.forEach($scope.sounds, function (value, key) {
            value.color = colors[i % colors.length];
            i += 1;
        });
    });

});
