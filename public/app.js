var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: 'partials/front.html',
        controller:'AppsController',
        controllerAs: 'appCtrl',
    })
    .when('/chef_registration', {
        templateUrl: 'partials/chef_registration.partial.html',
        controller:'ChefController',
        controllerAs: 'chefCtrl'
    })
    .when('/chef_login', {
        templateUrl: 'partials/chef_login.partial.html',
        controller:'ChefController',
        controllerAs: 'chefCtrl'
    })
    .when('/chef_dashboard', {
        templateUrl: 'partials/chefs.dashboard.html',
        controller: 'ChefController',
        controllerAs: 'chefCtrl'
    })
    .when('/diner_registration', {
        templateUrl: 'partials/diner_registration.partial.html',
        controller:'DinerController',
        controllerAs: 'dinerCtrl'
    })
    .when('/diner_login', {
        templateUrl: 'partials/diner_login.partial.html',
        controller:'DinerController',
        controllerAs: 'dinerCtrl'
    })
    .when('/main', {
        templateUrl: 'partials/main.html',
        controller:'AppsController',
        controllerAs: 'appCtrl'
    })
    .when('/newEvent', {
        templateUrl: 'partials/newEvent.html',
        controller: 'ChefController',
        controllerAs: 'chefCtrl'
    })
    .when('/one_event/:id', {
    templateUrl: 'partials/events_partial.html',
    controller: 'ChefController',
    controllerAs: 'chefCtrl'
})
.when('/chef_one_event/:id', {
    templateUrl: '/partials/chef.events_partial.html',
    controller: 'ChefController',
    controllerAs: 'chefCtrl'
})
.when('/chef_event_edit/:id', {
    templateUrl: '/partials/edit_newEvent.html',
    controller: 'ChefController',
    controllerAs: 'chefCtrl'
})
    .otherwise({
        redirectTo: '/',
    })
});

function validVar(var1){
if(var1 === undefined || var1 === null ) {
  return false;
}
return true;
}
