'use strict';
/**
 * @ngdoc overview
 * @name ApsilonApp
 * @description
 * # ApsilonApp
 *
 * Main module of the application.
 */



angular
  .module('ApsilonApp', [
    'oc.lazyLoad',
    'ui.router',
    'ui.bootstrap',
    'angular-loading-bar',
  ])
  .config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider',
    function($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {

      $ocLazyLoadProvider.config({
        debug: false,
        events: true,
      });

      $urlRouterProvider.otherwise('/dashboard/Home');


      $stateProvider
      .state('/', { templateUrl:'dashboard/main'})
        .state('dashboard', {
          url: '/dashboard',
          templateUrl: 'dashboard/main',
          resolve: {
            loadMyDirectives: function($ocLazyLoad) {
              return $ocLazyLoad.load({
                  name: 'ApsilonApp',
                  files: [
                    'app/scripts/directives/header/header.js',
                    'app/scripts/directives/header/header-notification/header-notification.js',
                    'app/scripts/directives/sidebar/sidebar.js',
                    'app/scripts/directives/sidebar/sidebar-search/sidebar-search.js'
                  ]
                }),
                $ocLazyLoad.load({
                  name: 'toggle-switch',
                  files: ["app/js/libs/angular-toggle-switch.min.js",
                    "app/styles/libs/angular-toggle-switch.css"
                  ]
                }),
                $ocLazyLoad.load({
                  name: 'ngCookies',
                  files: ['app/js/libs/angular-cookies.min.js']
                })
              $ocLazyLoad.load({
                name: 'ngResource',
                files: ['app/js/libs/angular-resource.min.js']
              })
              $ocLazyLoad.load({
                name: 'ngSanitize',
                files: ['app/js/libs/angular-sanitize.min.js']
              })
              $ocLazyLoad.load({
                name: 'ngTouch',
                files: ['app/js/libs/angular-touch.min.js']
              })
            }
          }
        })
        .state('dashboard.home', {
          url: '/Home',
          controller: 'MenuController',
          templateUrl: 'dashboard/home',
          resolve: {
            loadMyFiles: function($ocLazyLoad) {
              return $ocLazyLoad.load({
                name: 'ApsilonApp',
                files: [
                  'app/scripts/controllers/main.js',
                  'app/scripts/directives/dashboard/stats/stats.js',
                  'app/scripts/directives/menu/menu.js',
                  'app/scripts/directives/cartproducts/cartproducts.js',
                  'app/scripts/directives/pagenames/pagenames.js',
                ]
              })
            }
          }
        })

         .state('login', {
          templateUrl: 'login',
          url: '/login',
             resolve: {
            loadMyFiles: function($ocLazyLoad) {
              return $ocLazyLoad.load({
                name: 'ApsilonApp',
                files: [
                  'app/scripts/controllers/main.js',
                    'app/scripts/directives/header/header.js',
                  'app/scripts/directives/dashboard/stats/stats.js',
                  'app/scripts/directives/menu/menu.js',
                  'app/scripts/directives/cartproducts/cartproducts.js',
                  'app/scripts/directives/pagenames/pagenames.js',
                ]
              })
            }
          }
        })

    }
  ]);

