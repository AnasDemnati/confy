'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('flightsOTP')
	.directive('header',function(){
		return {
        templateUrl:'/apps/app-otp/scripts/directives/header/header.html',
        restrict: 'E',
        replace: true,
    	}
	});
