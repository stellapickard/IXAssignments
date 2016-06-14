var app = angular.module("toDoApp",[]);

app.controller("mainCtrl", function($scope){
	$scope.newItem=" ";
	$scope.items=[];


$scope.addItems = function(){
	$scope.items.push($scope.newItem);
	$scope.newItem = " "; 
}

$scope.remove = function(item) { 
  var index = $scope.items.indexOf(item);
  $scope.items.splice(index, 1);     

}

// ______ pre final closing 
});


