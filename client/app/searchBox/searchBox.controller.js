'use strict';

angular.module('cubomediaApp')
    .controller('SearchBoxCtrl', function ($state, $scope, $http) {
        $scope.q = '';
        $scope.searchInProgress = false;
        $scope.files = [];
        $scope.resultsFiles = [];
        $scope.forceClose = true;

        $scope.closeResults = function () {
            $scope.forceClose = true;
            $scope.$apply();
        };

        $scope.search = function () {
            $scope.forceClose = false;

            if ($scope.q.length == 0)
                $scope.resultsFiles = [];

            if ($scope.q.length > 1) {
                $scope.searchInProgress = true;

                $http.get('/api/files?q=' + $scope.q).success(function (files) {
                    $scope.searchInProgress = false;
                    $scope.resultsFiles = files;
                });
            }
        };

        $scope.nbSeries = 0;
        $scope.nbMovies = 0;

        $http.get('/api/movies').success(function (movies) {
            $scope.nbMovies = movies.length;
        });

        $http.get('/api/series').success(function (series) {
            $scope.nbSeries = series.length;
        });
    });
