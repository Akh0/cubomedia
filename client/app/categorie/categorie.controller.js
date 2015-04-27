'use strict';

angular.module('cubomediaApp')
    .controller('CategorieCtrl', function ($scope, $stateParams, $http) {
        $scope.files = [];

        $http.get('/api/' + $stateParams.category + 's').success(function (files) {
            $scope.files = files;
        });
    });
