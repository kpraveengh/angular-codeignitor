'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */


angular.module('ApsilonApp')
	.directive('cartproducts',function(){
		return {
        templateUrl:'app/scripts/directives/cartproducts/cartproducts.html',
        restrict: 'E',
        replace: true,
    	}
	});
