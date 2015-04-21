'use strict';

describe('Controller: CategorieCtrl', function () {

  // load the controller's module
  beforeEach(module('cubomediaApp'));

  var CategorieCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CategorieCtrl = $controller('CategorieCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
