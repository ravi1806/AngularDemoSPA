var myApp = angular.module('myApp',['ngRoute']);

myApp.config(['$routeProvider', function ($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'views/customers.html',
                    controller: 'CustomerController',
                    controllerAs: 'CustomCtrl'
                })
                .when('/orders/:customerId',{
                    templateUrl: 'views/orders.html',
                    controller: 'OrdersControl',
                    controllerAs: 'OrdersCtrl'
                })
                .otherwise({
                    redirectTo: '/'
                })
}]);

myApp.controller('CustomerController',['CustomersFactory', function (CustomersFactory) {
    var self = this;
    this.sortMe = 'name'; //default
    this.reverse = false; //default (ascending)
    this.customers = [];
    function init() {
       self.customers = CustomersFactory.getCustomers();
    }
    init();
    this.doSort = function (propName) {

        this.sortMe = propName;
        //console.log(this.sortMe);
        this.reverse = !this.reverse;
        //console.log(this.reverse);
    };


}]);