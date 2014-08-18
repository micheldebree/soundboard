/**
 * @ngdoc function
 * @name soundboardApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the soundboardApp
 */
angular
    
    .module('soundboardApp', ['ngResource', 'soundboardService']).controller('MainCtrl', function ($scope, Soundboard) {
        'use strict';
        var sounds = Soundboard.query(function () {
            $scope.sounds = sounds;
        });
    })
    
    .controller('BiteCtrl', ['$scope',
        function ($scope) {
            'use strict';
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