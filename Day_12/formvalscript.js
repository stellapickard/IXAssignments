var app = angular.module("FormApp", []);

app.controller("FormCtrl", function($scope) {
  

  $scope.name = " ";
  $scope.phoneNo = "";
  $scope.email = " ";
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
		else ()
	};

	var firstNum = $scope.numsplit[0];
	if ((firstNum.length !== 3) || (firstNum === NaN)){
		alert("Is the number you entered correct?");
	};

	var midNum = $scope.numsplit[1];
	if ((midNum.length !== 3) || (midNum === NaN)){
		alert("Is the number you entered correct?");
	};

	var lastNum = $scope.numsplit[2];
	if ((lastNum.length !== 4) || (lastNum === NaN)){
		alert("Is the number you entered correct?");
	};


//email validation
	var mailsplit = $scope.mail.split("@")
	if (mailsplit !== 2){
		alert("Your email address appears to be incorrect");
	}; 

	var mailend = $scope.mailend.split(".")
	if (mailend[1] !== 2){
		alert("Your email address appears to be incorrect");
	};

// password validation 
	if (($scope.passw !== $scope.rpassw)) {
    	alert("Your passwords don't match!");
    };
    if (($scope.passw.length < 6)){
    	alert("Sorry! Your password needs to be at least 6 characters long.")
    	console.log("yo");
    } else {
    	$scope.successful = "welcome " + $scope.name;
    };
 

// ________ last bracket of checkInputs function

  };

 // ________ last bracket 

});


