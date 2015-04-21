'use strict';

angular.module('cubomediaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.fiche', {
        url: 'fiche/:id',
        templateUrl: 'app/fiche/fiche.html',
        controller: 'FicheCtrl'
      });
  });