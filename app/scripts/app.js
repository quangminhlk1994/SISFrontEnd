'use strict';

angular
    .module('sbAdminApp', [
        'oc.lazyLoad',
        'ui.router',
        'ui.bootstrap',
        'angular-loading-bar',
        'ngAnimate',
        'ngTagsInput',
        'ngResource',
        'datatables',
        'datatables.scroller'
    ])
    .run(function(DTDefaultOptions) {
        DTDefaultOptions.setLoadingTemplate('<img src="images/gears.gif">');
    })
    .config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, $locationProvider) {
        $ocLazyLoadProvider.config({
            debug: false,
            events: true,
        });




        $urlRouterProvider.otherwise('dashboard');
        $stateProvider
            .state('dashboard', {
                url: '/dashboard',
                templateUrl: 'views/dashboard/home.html',
                controller: 'homeCtrl',
                resolve: {
                    loadMyDirectives: function($ocLazyLoad) {
                        $ocLazyLoad.load({
                                name: 'toggle-switch',
                                files: ["bower_components/angular-toggle-switch/angular-toggle-switch.min.js",
                                    "bower_components/angular-toggle-switch/angular-toggle-switch.css"
                                ]
                            }),
                            $ocLazyLoad.load({
                                name: 'ngAnimate',
                                files: ['bower_components/angular-animate/angular-animate.js']
                            })
                        $ocLazyLoad.load({
                            name: 'data-table',
                            files: ['bower_components/angular-data-table/angular-animate.js']
                        })
                        $ocLazyLoad.load({
                            name: 'ngCookies',
                            files: ['bower_components/angular-cookies/angular-cookies.js']
                        })
                        $ocLazyLoad.load({
                            name: 'ngResource',
                            files: ['bower_components/angular-resource/angular-resource.js']
                        })
                        $ocLazyLoad.load({
                            name: 'ngSanitize',
                            files: ['bower_components/angular-sanitize/angular-sanitize.js']
                        })
                        $ocLazyLoad.load({
                            name: 'ngTouch',
                            files: ['bower_components/angular-touch/angular-touch.js']
                        })
                        return $ocLazyLoad.load({
                            name: 'sbAdminApp',
                            files: [
                                'scripts/directives/header/header.js',
                                'scripts/directives/header/header-notification/header-notification.js',
                                'scripts/directives/sidebar/sidebar.js',
                                'scripts/directives/sidebar/sidebar-search/sidebar-search.js',

                            ]
                        })

                    }
                }
            })
            // .state('dashboard.home', {
            //   url: '/home',
            //   controller: 'MainCtrl',
            //   templateUrl: 'views/dashboard/home.html',
            //   resolve: {
            //     loadMyFiles: function ($ocLazyLoad) {
            //       return $ocLazyLoad.load({
            //         name: 'sbAdminApp',
            //         files: [
            //           'scripts/controllers/main.js',
            //           'scripts/directives/timeline/timeline.js',
            //           'scripts/directives/notifications/notifications.js',
            //           'scripts/directives/chat/chat.js',
            //           'scripts/directives/dashboard/stats/stats.js'
            //         ]
            //       })
            //     }
            //   }
            // })
            .state('dashboard.category', {
                templateUrl: 'views/category.html',
                resolve: {
                    loadMyFiles: function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name: 'sbAdminApp',
                            files: [
                                'scripts/controllers/main.js',
                                'scripts/controllers/categoryController.js',
                            ]
                        })
                    }
                },
                url: '/category'
            })
            .state('dashboard.order', {
                templateUrl: 'views/order.html',
                url: '/order',
                resolve: {
                    loadMyFiles: function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name: 'sbAdminApp',
                            files: [
                                'scripts/controllers/main.js',
                                'scripts/controllers/orderController.js',
                            ]
                        })
                    }
                }
            })
            .state('login', {
                templateUrl: 'views/pages/login.html',
                url: '/login'
            })
            .state('dashboard.product', {
                templateUrl: 'views/product.html',
                url: '/product',
                controller: 'productController',
                resolve: {
                    loadMyFile: function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name: 'sbAdminApp',
                            files: [
                                'scripts/controllers/productController.js',
                                'scripts/controllers/categoryController.js',
                                'scripts/services/FactoryService/pizzaFactory.js',
                                'scripts/services/FactoryService/categoryFactory.js'
                            ]
                        })
                    }
                }
            })
            .state('course', {
                templateUrl: 'views/course.html',
                url: '/course',
                controller: 'courseController',
                resolve: {
                    loadMyFile: function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name: 'sbAdminApp',
                            files: [
                                'scripts/controllers/courseController.js',
                                'scripts/services/FactoryService/courseFactory.js',
                            ]
                        })
                    }
                }
            })
            .state('student', {
                templateUrl: 'views/student.html',
                url: '/student',
                controller: 'studentController',
                resolve: {
                    loadMyFile: function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name: 'sbAdminApp',
                            files: [
                                'scripts/controllers/studentController.js',
                                'scripts/services/FactoryService/studentFactory.js',
                                'styles/scroller.dataTables.min.css'
                            ]
                        })
                    }
                }
            })
            .state('addstudent', {
                templateUrl: 'views/addstudent.html',
                url: '/addstudent',
                controller: 'studentController',
                resolve: {
                    loadMyFile: function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name: 'sbAdminApp',
                            files: [
                                'scripts/controllers/studentController.js',
                                'scripts/services/FactoryService/studentFactory.js',
                            ]
                        })
                    }
                }
            })
            .state('programe', {
                templateUrl: 'views/programe.html',
                url: '/programe',
                controller: 'programeController',
                resolve: {
                    loadMyFile: function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name: 'sbAdminApp',
                            files: [
                                'scripts/controllers/programeController.js',
                                'scripts/services/FactoryService/programeFactory.js',
                            ]
                        })
                    }
                }
            })
            .state('intake', {
                templateUrl: 'views/intake.html',
                url: '/intake',
                controller: 'intakeController',
                resolve: {
                    loadMyFile: function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name: 'sbAdminApp',
                            files: [
                                'scripts/controllers/intakeController.js',
                                'scripts/services/FactoryService/intakeFactory.js',
                            ]
                        })
                    }
                }
            })
            .state('catalog', {
                templateUrl: 'views/catalog.html',
                url: '/catalog',
                controller: 'catalogController',
                resolve: {
                    loadMyFile: function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name: 'sbAdminApp',
                            files: [
                                'scripts/controllers/catalogController.js',
                                'scripts/services/FactoryService/catalogFactory.js',
                            ]
                        })
                    }
                }
            })
            .state('dashboard.table', {
                templateUrl: 'views/table.html',
                url: '/table'
            })

    }])
    .controller('homeCtrl', function() {
        console.log('in homecontrolller');
    });