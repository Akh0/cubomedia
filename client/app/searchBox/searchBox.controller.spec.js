'use strict';

describe('Controller: SearchBoxCtrl', function () {

    // load the controller's module
    beforeEach(module('cubomediaApp'));

    var SearchBoxCtrl, scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        SearchBoxCtrl = $controller('SearchBoxCtrl', {
            $scope: scope
        });
    }));

    it('should ...', function () {
        expect(1).toEqual(1);
    });
});
