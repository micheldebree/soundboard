/*global angular*/
angular.module('soundboardApp', ['ngResource', 'soundboardService'])

    .controller('MainCtrl', function ($scope, Soundboard) {
        'use strict';
        
        $scope.soundboard = Soundboard.get({
            id: 'lau.js'
        });

        $scope.soundboard.$promise.then(function (data) {
            $scope.sounds = data.sounds;
        });

    })

    .controller('BiteCtrl', ['$scope', function ($scope) {
        
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
            $scope.audio.id = sound.id;
            $scope.audio.src = $scope.soundboard.folder + sound.file;
            $scope.audio.load();
        };

        $scope.play = function () {

            if ($scope.audio.paused) {
                $scope.audio.play();
            } else {
                $scope.audio.pause();
               
            }
        };

    }]);