'use strict';

angular.module('cubomediaApp')
    .controller('AccueilCtrl', function ($scope, $http) {
        $scope.fichesFilm = [];
        $scope.fichesSerie = [];

        $http.get('/api/fiches?category=movie').success(function (fichesFilm) {
            $scope.fichesFilm = fichesFilm;
        });

        $http.get('/api/fiches?category=tvseries').success(function (fichesSerie) {
            $scope.fichesSerie = fichesSerie;
        });

    });
