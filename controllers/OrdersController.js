
myApp.controller('OrdersControl',['$routeParams','CustomersFactory', function ($routeParams,CustomersFactory) {
    var self = this;
    var customerId = $routeParams.customerId;


    this.customer = null;



    function init() {
        //console.log('infunc',self.customers);
        //search the customers for customerId
        self.customer = CustomersFactory.getCustomer(customerId);
    }

    init();

}]);