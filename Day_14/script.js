// var app = angular.module("FormApp", []);
var app = angular.module("ChommiesApp", ["ngRoute"]);

app.config(function($routeProvider){
	$routeProvider.when ("/", {
		templateUrl: "/feed.html"
	})

	$routeProvider.when("/personal", {
		templateUrl: "/personal.html",
	})

	

});

// FEED CONTROL

app.controller("feedCtrl", function($scope, $http){
	var brus = [];
	var props = [];
	$http({
		method: "GET",
		url: "http://ixchommies.herokuapp.com/brus",
		params: { 
			token: "7bbce67a94adb97f8b1c46fd108e7a40"}, 

		}).then(function(response){
			$scope.brus = response.data;
	});

	$scope.loadData = function(){  
		$http({
			method: "GET",
			url: "http://ixchommies.herokuapp.com/props",
			params: { token: "7bbce67a94adb97f8b1c46fd108e7a40"}
		}).then(function(response){
			$scope.props = response.data;

		});
	}
	$scope.sendPost = function(){
	
		$http({
			method: "POST",
			url: "http://ixchommies.herokuapp.com/props",
			params: { token: "7bbce67a94adb97f8b1c46fd108e7a40"},
			data: 	{
				props: $scope.newProp.compliment,
				for: $scope.newProp.receiver.id},

			}).then(function(response){
				sendPostSuccess(response);
			},function(response){
				sendPostError(response);
		});

		function sendPostSuccess(response){
				$scope.props = response.data;
				$scope.loadData();
				$scope.newProp.receiver = "";
				$scope.newProp.compliment = "";
		}
		function sendPostError(response){
				alert(response.data.message);
				
		}
	}
	$scope.loadData();
});

// ME CONTROL 

app.controller("meCtrl", function($scope, $http){
	$http({
		method: "GET",
		url: "http://ixchommies.herokuapp.com/props/me",
		params: { 
			token: "7bbce67a94adb97f8b1c46fd108e7a40"}, 

		}).then(function(response){
			$scope.props = response.data;
			// console.log(response.data[0].receiver.id);
			console.log("yo"); 
		});
	

	
}); 



// Sahil's code



// app.controller("MeCtrl", function($scope, $http){
//  var url = "http://ixchommies.herokuapp.com/";
//  $http({
//    method: "GET",
//    url: url + "brus",
//    params: { token: "c61c2ba10a06cfd0a03b1571534e8d61" }
//  }).then(function(response) {
//    $scope.brus = response.data;
//    console.log("b", $scope.brus);
//  });

//  $http({
//    method: "GET",
//    url: url + "props/me",
//    params: { token: "c61c2ba10a06cfd0a03b1571534e8d61" }
//  }).then(function(response) {
   
//    console.log("p", $scope.props);
//  });
// })
