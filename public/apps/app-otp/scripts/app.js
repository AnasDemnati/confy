'use strict';
/**
 * @ngdoc overview
 * @name flightsOTP
 * @description
 * # flightsOTP
 *
 * Main module of the application.
 */
angular
  .module('flightsOTP', [
    'oc.lazyLoad',
    'ui.router',
    'ui.bootstrap',
    'angular-loading-bar',
    'ngcsv',
  ])
  .config(['$stateProvider','$urlRouterProvider','$ocLazyLoadProvider',function ($stateProvider,$urlRouterProvider,$ocLazyLoadProvider) {

    $ocLazyLoadProvider.config({
      debug:false,
      events:true,
    });

    $urlRouterProvider.otherwise('/dashboard/home');

    $stateProvider
      .state('dashboard', {
        url:'/dashboard',
        templateUrl: '/apps/app-otp/views/dashboard/main.html',
        resolve: {
          loadMyDirectives:function($ocLazyLoad){
            return $ocLazyLoad.load(
            {
                name:'flightsOTP',
                files:[
                  '/apps/app-otp/scripts/directives/header/header.js',
                  '/apps/app-otp/scripts/directives/dashboard/stats/stats.js'
                ]
            }),
            $ocLazyLoad.load(
            {
               name:'toggle-switch',
               files:["/vendor/angular-toggle-switch/angular-toggle-switch.min.js",
                      "/vendor/angular-toggle-switch/angular-toggle-switch.css"
                  ]
            }),
            $ocLazyLoad.load(
            {
              name:'ngAnimate',
              files:['/vendor/angular-animate/angular-animate.js']
            })
            $ocLazyLoad.load(
            {
              name:'ngCookies',
              files:['/vendor/angular-cookies/angular-cookies.js']
            })
            $ocLazyLoad.load(
            {
              name:'ngResource',
              files:['/vendor/angular-resource/angular-resource.js']
            })
            $ocLazyLoad.load(
            {
              name:'ngSanitize',
              files:['/vendor/angular-sanitize/angular-sanitize.js']
            })
            $ocLazyLoad.load(
            {
              name:'ngTouch',
              files:['/vendor/angular-touch/angular-touch.js']
            })
          }
      }
  })
      .state('dashboard.home',{
        url:'/home',
        controller: 'MainCtrl',
        templateUrl:'/apps/app-otp/views/dashboard/home.html',
        resolve: {
          loadMyFiles:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'flightsOTP',
              files:[
              '/apps/app-otp/scripts/controllers/main.js',
              '/apps/app-otp/scripts/services/data-store.js'
              ]
            });
          }
        }
      })
      .state('dashboard.chart', {
        templateUrl:'/apps/app-otp/views/chart.html',
        url:'/chart/:selectedOrigin/:selectedDest',
        controller:'ChartCtrl',
        resolve: {
          loadMyFile:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'chart.js',
              files:[
                '/vendor/chart.js/dist/Chart.min.js',
                '/vendor/angular-chart.js/dist/angular-chart.min.js',
                '/vendor/chartjs-plugin-zoom/chartjs-plugin-zoom.min.js'
              ]
            }),
            $ocLazyLoad.load({
                name:'flightsOTP',
                files:[
                  '/apps/app-otp/scripts/controllers/chartContoller.js',
                  '/apps/app-otp/scripts/services/data-store.js'
                ]
            });
          }
        }
      });
  }]);
