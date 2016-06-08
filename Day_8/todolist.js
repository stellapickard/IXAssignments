

// $(function(){
//     $('#todo-input').val('');
// });

$(document).ready(function(){
	$("#todo-input").keyup(function(e) { 
		var code = e.keyCode;
		if(code===13){
			addToList($("#todo-input").val());
			$("#todo-input").val("");

		}
	});
});

function addToList(value) {
	console.log(value);
	var liElem = $("<li></li>").html(value);
	$("#list").append(liElem);
};




// function removeFromList(value) {
	

// 	}

