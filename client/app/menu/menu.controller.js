'use strict';

angular.module('cubomediaApp')
    .controller('MenuCtrl', function ($state, $scope, $http) {
        $scope.nbSeries = 0;
        $scope.nbMovies = 0;

        $http.get('/api/movies').success(function (movies) {
            $scope.nbMovies = movies.length;
        });

        $http.get('/api/series').success(function (series) {
            $scope.nbSeries = series.length;
        });
    });
