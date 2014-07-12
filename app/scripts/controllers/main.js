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
        $scope.sounds = [
            {
                id: "a1",
                title: "Testje",
                file: "sound1.mp3"
            },
            {
                id: "a2",
                title: "Test 2",
                file: "sound2.mp3"
            }];


    })
    .controller('BiteCtrl', ['$scope', function ($scope) {

        $scope.audio = document.createElement('audio');
        $scope.playingStyle = '';
                
        $scope.init = function (sound) {
            $scope.audio.id = sound.id;
            $scope.audio.src = sound.file;
            $scope.audio.load();
        };
        
        $scope.play = function () {
                        
            if ($scope.audio.paused) {
                $scope.audio.play();
                $scope.playingStyle = 'playing';
            } else {
                $scope.audio.pause();
                $scope.audio.currentTime = 0;
                $scope.playingStyle = '';
            }
        };

    }]);