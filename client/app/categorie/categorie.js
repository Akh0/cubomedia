'use strict';

angular.module('cubomediaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.categorie', {
        url: 'categorie/:id',
        templateUrl: 'app/categorie/categorie.html',
        controller: 'CategorieCtrl'
      });
  });