/*global angular*/
angular.module('soundboardService', ['ngResource']).factory('Soundboard', function ($resource) {
    'use strict';
    return $resource('api/soundboards/:id');
});