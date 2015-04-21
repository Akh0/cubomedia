'use strict';

angular.module('cubomediaApp')
    .controller('FicheCtrl', function ($scope, $http, $stateParams, $sce) {
        $scope.fiche = {};
        $scope.embedTrailerSrc = '';

        $http.get('/api/fiches/' + $stateParams.id).success(function (fiche) {
            $scope.fiche = fiche;
            $scope.embedTrailerSrc = $sce.trustAsResourceUrl(fiche.trailerEmbedHref);
            console.log(fiche);
        });
    });
