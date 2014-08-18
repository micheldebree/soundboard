angular.module('soundboardService', ['ngResource']).factory('Soundboard', function ($resource) {
    'use strict';
    return $resource('/testboard/index.js');
});