'use strict';

angular.module('cubomediaApp')
    .controller('AccueilCtrl', function ($scope, $http) {
        $scope.films = [];
        $scope.series = [];

        $http.get('/api/movies').success(function (films) {
            $scope.films = films;
        });

        $http.get('/api/series').success(function (series) {
            $scope.series = series;
        });
    });
