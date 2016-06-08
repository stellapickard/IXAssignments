$(document).ready(function() {

	$("#submit-btn").on("click", function() {
		phoneValidator();
		emailValidator();

	});

	function phoneValidator() {
		var phone = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
		if ($("#phone").val().match(phone)){
			
		} else { 
			alert("Are you sure this is the correct number?");
			return false; 
		}

	}; 

	function emailValidator(){
		var email = $("#email").val();
		var atpos = email.indexOf("@");
        var dotpos = email.lastIndexOf(".");
		if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length){
			alert("Oops! Seems like you made a typo!");
			return false; 
		}
	};



});

