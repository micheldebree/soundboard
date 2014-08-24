'use strict';

describe('Controller: SoundbiteCtrl', function () {

  // load the controller's module
  beforeEach(module('soundboard2App'));

  var SoundbiteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SoundbiteCtrl = $controller('SoundbiteCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
