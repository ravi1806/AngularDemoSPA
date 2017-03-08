myApp.factory('CustomersFactory',[function(){
    var self = this;
    var customers = [
            {joined: '2012-12-03', name: 'Amit', city: 'Delhi', orderTotal: 34.53,orders: [{id:1,product:'shoes',total:'34.53'}]},
            {joined: '1995-04-24', name: 'Ravi', city: 'Mumbai',orderTotal: 45.34,orders: [{id:2,product:'socks',total:'53.51'}]},
            {joined: '2003-03-21', name: 'Flish', city: 'Lonavla', orderTotal: 134.323,orders: [{id:3,product:'books',total:'43.55'}]},
            {joined: '2003-10-14', name: 'Meahe', city: 'Pune', orderTotal: 12.33,orders: [{id:4,product:'eraser',total:'12.33'}]}
        ];

    var factory = {};

    factory.getCustomers = function () {
        return customers;
    };

    factory.getCustomer = function (customerId) {
        for(var i=0; i < customers.length; i++){
            if(customers[i].orders[0].id === parseInt(customerId)) {

                return customers[i];
                // console.log('customers[i]');
            }
        }

        return {}; //return null or empty object if we dont find the customer
    };
    return factory;
}]);