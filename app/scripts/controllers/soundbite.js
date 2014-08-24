/*global angular*/
angular.module('soundboardApp').controller('SoundbiteCtrl', function ($scope) {
    
    'use strict';
    
    $scope.audio = document.createElement('audio');
    $scope.playingStyle = '';

    $scope.audio.addEventListener('timeupdate', function () {
        $scope.remaining = $scope.audio.duration - $scope.audio.currentTime;
        $scope.$apply();
    });

    $scope.audio.addEventListener('play', function () {
        $scope.playingStyle = 'playing';
        $scope.$apply();
    });

    $scope.audio.addEventListener('ended', function () {
        $scope.playingStyle = '';
        $scope.audio.currentTime = 0;
        $scope.$apply();
    });

    $scope.init = function (sound) {
        $scope.audio.id = sound.file;
        $scope.audio.src = $scope.soundboard.folder + sound.file;
        $scope.audio.load();
    };

    $scope.play = function () {

        if ($scope.audio.paused) {
            $scope.audio.play();
        }
    };
});
