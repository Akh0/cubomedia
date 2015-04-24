'use strict';

angular.module('cubomediaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.categorie', {
        url: 'categorie/:category',
        templateUrl: 'app/categorie/categorie.html',
        controller: 'CategorieCtrl'
      });
  });