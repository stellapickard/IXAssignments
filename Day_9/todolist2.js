$(document).ready(function(){


//take the value typed into the form
// when the enter key is pressed
// append that value to the li


$("#todo-input").on("keyup", function(e){
	var keyCode = event.keyCode; 
	if (keyCode === 13) {
		addToList($("#todo-input").val());
		clearForm(); 
		return false
	};
})

function addToList(value){
	var liElem = $("<li></li>").html(value);
	$("#list").append(liElem);
}; 

 
function clearForm(){
	$("#todo-input").val("");

};



//when user clicks on a list item
//the value in that targeted list item must be removed from the list


$('ol').on('click', 'li', function() {
        $(this).remove();
    });



// -------------------	

}); 