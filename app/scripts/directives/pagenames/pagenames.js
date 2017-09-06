'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('ApsilonApp')
	.directive('pagenames',function(){
		return {
        templateUrl:'app/scripts/directives/pagenames/pagenames.html',
        restrict: 'E',
        replace: true,
    	}
	});

