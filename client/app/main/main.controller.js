'use strict';

angular.module('cubomediaApp')
    .controller('MainCtrl', function ($state, $scope, $http, socket) {
        $scope.q = '';
        $scope.searchInProgress = false;
        $scope.fiches = [];
        $scope.resultsFiches = [];

        $http.get('/api/fiches').success(function(fiches) {
            $scope.fiches = fiches;
        });

        $scope.search = function() {
            if($scope.q.length == 0)
                $scope.resultsFiches = [];

            if($scope.q.length > 1) {
                $scope.searchInProgress = true;

                $http.get('/api/fiches?q=' + $scope.q).success(function (fiches) {
                    $scope.searchInProgress = false;
                    $scope.resultsFiches = fiches;
                });
            }
        };

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
