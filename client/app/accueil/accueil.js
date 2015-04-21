'use strict';

angular.module('cubomediaApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('main.accueil', {
                url: '',
                templateUrl: 'app/accueil/accueil.html',
                controller: 'AccueilCtrl'
            });
    });