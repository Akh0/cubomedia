'use strict';

angular.module('cubomediaApp')
    .controller('MainCtrl', function ($state, $scope, $http, socket) {
        $scope.q = '';
        $scope.searchInProgress = false;
        $scope.files = [];
        $scope.resultsFiles = [];
        $scope.forceClose = true;

        $scope.closeResults = function() {
            $scope.forceClose = true;
            $scope.$apply();
        };

        $scope.search = function() {
            $scope.forceClose = false;

            if($scope.q.length == 0)
                $scope.resultsFiles = [];

            if($scope.q.length > 1) {
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


            //$scope.categories = [];

        //$http.get('/api/categories').success(function (categories) {
        //    $scope.categories = categories;
            //socket.syncUpdates('thing', $scope.awesomeThings);
        //});


        //$scope.awesomeThings = [];
        //
        //$http.get('/api/things').success(function(awesomeThings) {
        //  $scope.awesomeThings = awesomeThings;
        //  socket.syncUpdates('thing', $scope.awesomeThings);
        //});
        //
        //$scope.addThing = function() {
        //  if($scope.newThing === '') {
        //    return;
        //  }
        //  $http.post('/api/things', { name: $scope.newThing });
        //  $scope.newThing = '';
        //};
        //
        //$scope.deleteThing = function(thing) {
        //  $http.delete('/api/things/' + thing._id);
        //};
        //
        //$scope.$on('$destroy', function () {
        //  socket.unsyncUpdates('thing');
        //});
    });
