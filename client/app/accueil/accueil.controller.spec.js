'use strict';

describe('Controller: AccueilCtrl', function () {

  // load the controller's module
  beforeEach(module('cubomediaApp'));

  var AccueilCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AccueilCtrl = $controller('AccueilCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
