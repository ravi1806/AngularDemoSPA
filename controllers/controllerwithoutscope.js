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

myApp.controller('CustomerController',[ function () {

    this.sortMe = 'name'; //default
    this.reverse = false; //default (ascending)

    this.customers = [
        {joined: '2012-12-03', name: 'Amit', city: 'Delhi', orderTotal: 34.53,orders: [{id:1,product:'shoes',total:'34.53'}]},
        {joined: '1995-04-24', name: 'Ravi', city: 'Mumbai',orderTotal: 45.34,orders: [{id:2,product:'socks',total:'53.51'}]},
        {joined: '2003-03-21', name: 'Flish', city: 'Lonavla', orderTotal: 134.323,orders: [{id:3,product:'books',total:'43.55'}]},
        {joined: '2003-10-14', name: 'Meahe', city: 'Pune', orderTotal: 12.33,orders: [{id:4,product:'eraser',total:'12.33'}]}
    ];

    this.doSort = function (propName) {

        this.sortMe = propName;
        //console.log(this.sortMe);
        this.reverse = !this.reverse;
        //console.log(this.reverse);
    };


}]);