'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('ApsilonApp')
	.directive('menu',function() {
    return {
        templateUrl:'app/scripts/directives/menu/menu.html',
        restrict: 'E',
        replace: true,
    }
  });
