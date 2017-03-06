
myApp.controller('OrdersControl',['$routeParams', function ($routeParams) {
    var customerId = $routeParams.customerId;


    this.orders = null;
    var self = this;


    this.customers = [
        {joined: '2012-12-03', name: 'Amit', city: 'Delhi', orderTotal: 34.53,orders: [{id:1,product:'shoes',total:'34.53'}]},
        {joined: '1995-04-24', name: 'Ravi', city: 'Mumbai',orderTotal: 45.34,orders: [{id:2,product:'socks',total:'53.51'}]},
        {joined: '2003-03-21', name: 'Flish', city: 'Lonavla', orderTotal: 134.323,orders: [{id:3,product:'books',total:'43.55'}]},
        {joined: '2003-10-14', name: 'Meahe', city: 'Pune', orderTotal: 12.33,orders: [{id:4,product:'eraser',total:'12.33'}]}
    ];

    function init() {
        console.log('infunc',self.customers);
        //search the customers for customerId
        for(var i=0; i < self.customers.length; i++){
            if(self.customers[i].orders[0].id === parseInt(customerId)) {

                self.orders = self.customers[i].orders;
                console.log('orders',self.orders)
                break;
            }
        }
    }

    init();

}]);