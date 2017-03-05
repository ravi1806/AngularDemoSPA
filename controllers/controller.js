var myApp = angular.module('myApp',[]);

myApp.controller('CustomerController',['$scope', function ($scope) {
    //var self = this;
    $scope.sortMe = 'name'; //default
    $scope.reverse = false; //default (ascending)

    $scope.customers = [
                       {joined: '2012-12-03', name: 'Amit', city: 'Delhi', orderTotal: 34.53},
                       {joined: '1995-04-24', name: 'Ravi', city: 'Mumbai',orderTotal: 45.34},
                       {joined: '2003-03-21', name: 'Flish', city: 'Lonavla', orderTotal: 134.323},
                       {joined: '2003-10-14', name: 'Meahe', city: 'Pune', orderTotal: 12.33}
                     ];

    $scope.doSort = function (propName) {

        $scope.sortMe = propName;
        console.log($scope.sortMe);
        $scope.reverse = !$scope.reverse;
        console.log('inside doSort');
    };


}]);