var app = angular.module("addressBookApp",[]);

app.controller("addressCtrl", function($scope){
	$scope.newName=" ";
	$scope.newNumber=" ";
	$scope.person=[];


$scope.submitItems = function(){

// Name validation
// console.log($scope.person);

	if ($scope.person.newName === " "){
      alert("Oops, you forgot something!")
    }; 

// Phone number validation

var numsplit = $scope.newNumber.split("-");
	if (numsplit.length !== 3){
		alert("Is the number you entered correct?");
	};
	console.log(numsplit);

	var firstNum = numsplit[0];
	if ((firstNum.length !== 3) || (firstNum === NaN)){
		alert("Is the number you entered correct?");
	};

	var midNum = numsplit[1];
	if ((midNum.length !== 3) || (midNum === NaN)){
		alert("Is the number you entered correct?");
	};

	var lastNum = numsplit[2];
	if ((lastNum.length !== 4) || (lastNum === NaN)){
		alert("Is the number you entered correct?");
	};

	$scope.person.push($scope.newName + $scope.newNumber);
	// console.log($scope.person);    
	$scope.submit = false; 
	$scope.next = "Welcome Stella"

// }
};
// ______ pre final closing 
});