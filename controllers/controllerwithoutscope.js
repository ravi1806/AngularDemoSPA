var myApp = angular.module('myApp',[]);

myApp.controller('CustomerController',[ function () {
    var self = this;
    this.sortMe = 'name'; //default
    this.reverse = false; //default (ascending)

    this.customers = [
        {joined: '2012-12-03', name: 'Amit', city: 'Delhi', orderTotal: 34.53},
        {joined: '1995-04-24', name: 'Ravi', city: 'Mumbai',orderTotal: 45.34},
        {joined: '2003-03-21', name: 'Flish', city: 'Lonavla', orderTotal: 134.323},
        {joined: '2003-10-14', name: 'Meahe', city: 'Pune', orderTotal: 12.33}
    ];

    this.doSort = function (propName) {

        this.sortMe = propName;
        console.log(this.sortMe);
        this.reverse = !this.reverse;
        console.log('inside doSort');
    };


}]);