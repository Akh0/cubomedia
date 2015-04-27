'use strict';

angular.module('cubomediaApp')
    .controller('FicheCtrl', function ($scope, $http, $stateParams, $sce) {
        $scope.isSerie = $stateParams.type == 'serie';

        $scope.fiche = {};
        $scope.embedTrailerSrc = '';
        $scope.episodes = [];
        $scope.seasonNumbers = [];

        $http.get('/api/' + ($scope.isSerie ? 'series' : 'movies') + '/' + $stateParams.id).success(function (fiche) {
            $scope.fiche = fiche;
            $scope.embedTrailerSrc = $sce.trustAsResourceUrl(fiche.trailerEmbedHref);
            console.log(fiche);

            if ($scope.isSerie) {
                $http.get('/api/episodes?serieID=' + $stateParams.id).success(function (episodes) {
                    $scope.episodes = episodes;

                    angular.forEach(episodes, function (episode) {
                        if (-1 === $scope.seasonNumbers.indexOf(episode.seasonNumber))
                            $scope.seasonNumbers.push(episode.seasonNumber);
                    });
                });
            }
        });
    });
