'use strict';

//angular.module('cubomediaApp')
//    .factory('PosterProps', function ($rootScope) {
//        return {
//            src: 'waza'
//        }
//    });

angular.module('cubomediaApp')
    .directive('posterReplace', function () {
        return {
            restrict: 'EA',
            link: function (scope, element) {
                element.bind('click', function () {
                    //alert('ogogol');
                    element.siblings().removeClass('current');
                    element.addClass('current');
                    //PosterProps.src = element.attr('src');
                    //PosterProps.src = element.attr('src');
                    $('.mainPicture img').attr('src', element.attr('src'));
                });
            }
        };
    });
//
//angular.module('cubomediaApp')
//    .directive('poster', function (PosterProps) {
//        return {
//            restrict: 'EA',
//            scope: {width: '=', src: '='},
//            template: '<img  />',
//            replace: true,
//            link: function (scope, element) {
//                scope.src = PosterProps.src;
//            }
//        };
//    });