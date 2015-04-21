'use strict';

describe('Directive: posterReplace', function () {

  // load the directive's module
  beforeEach(module('cubomediaApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<poster-replace></poster-replace>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the posterReplace directive');
  }));
});