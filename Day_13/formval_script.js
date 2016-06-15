// var app = angular.module("FormApp", []);
var app = angular.module("RouterApp", ["ngRoute"]);

app.config(function($routeProvider){
	$routeProvider.when ("/", {
		templateUrl: "/formval_index.html"
	})

	$routeProvider.when("/address", {
		templateUrl: "/address_index.html",
	})

	otherwise('/formval_index.html');
    }

});

// FORM CONTROLLER

app.controller("FormCtrl", function($scope) {
  

  $scope.name = " ";
  $scope.phoneNo = "";
  $scope.mail = " ";
  $scope.passw = " ";
  $scope.rpassw = " ";
  
  $scope.checkInputs = function(){

//name validation
    if ($scope.name === " "){
      alert("Oops, you forgot something!");
    }; 

//number validation
	var numsplit = $scope.phone.split("-")
	if (numsplit.length !== 3){
		alert("Is the number you entered correct?");
	};

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


//email validation
	var mailsplit = $scope.mail.split("@")
	if (mailsplit.length !== 2){
		alert("Your email address appears to be incorrect");
	}; 

	var mailend = mailsplit[1].split(".")
	if (mailend.length !== 2){
		alert("Your email address appears to be incorrect");
	};

// password validation 
	if (($scope.passw !== $scope.rpassw)) {
    	alert("Your passwords don't match!");
    };
    if (($scope.passw.length < 6)){
    	alert("Sorry! Your password needs to be at least 6 characters long.")
    	console.log("yo");
    };
 
 $scope.checkInputs = false; 
 $scope.next = $window.location.href = "#/formval_index.html"; //Not sure if I need a # here

// __ last bracket of checkInputs function

  };

// __ last bracket 

});

// -------------------------------------------------
// ADDRESS CONTROLLER

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
	 
	

// }
};
// ______ pre final closing 
});

