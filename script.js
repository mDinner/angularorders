var demoApp = angular.module('demoApp', ['ngRoute']);

demoApp.config(function($routeProvider){
	$routeProvider
		.when('/', 
			{
				controller:'SimpleController',
				templateUrl:'Partials/View1.html'

			})
		.when('/view2',
			{
				controller:'SimpleController',
				templateUrl:'Partials/View2.html'
			})
			.otherwise({redirect:'/'});
});
demoApp.factory('simpleFactory', function(){
	  	var customers = [
  		{ name: 'Dave', city: 'Phoenix' }, 
  		{ name: 'Napur', city: 'Alabama' }, 
  		{ name: 'Sam', city: 'Montreal' }, 
  		{ name:'Tony', city: 'Brooklyn' }
  		];

  	var factory= {};
  	factory.getCustomers = function() {
  		return customers;
  	};
  	return factory;
})

demoApp.controller('SimpleController', function($scope, simpleFactory) {
	$scope.customers = [];

	init();

	function init() {
		$scope.customers = simpleFactory.getCustomers();
	}

  	$scope.addCustomer = function(){
  		$scope.customers.push({ name: $scope.newCustomer.name, city: $scope.newCustomer.city});
  	}
});
