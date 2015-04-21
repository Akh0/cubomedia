'use strict';

describe('Controller: FicheCtrl', function () {

  // load the controller's module
  beforeEach(module('cubomediaApp'));

  var FicheCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FicheCtrl = $controller('FicheCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
