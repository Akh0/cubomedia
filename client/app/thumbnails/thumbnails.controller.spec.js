'use strict';

describe('Controller: ThumbnailsBoxCtrl', function () {

    // load the controller's module
    beforeEach(module('cubomediaApp'));

    var ThumbnailsBoxCtrl, scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        ThumbnailsBoxCtrl = $controller('ThumbnailsBoxCtrl', {
            $scope: scope
        });
    }));

    it('should ...', function () {
        expect(1).toEqual(1);
    });
});
