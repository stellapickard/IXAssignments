
$(document).ready(function() {
	var clickCount = 0; //change this strategically!

	$(".grid-box").click(function(e) {
		var clickedID = e.currentTarget.id; //the id of the box that was clicked.
		//fill in stuff HERE!
		if ($("#"+clickedID).html()=== "") {
			$("#"+clickedID).html("X");
		} else if ($("#"+clickedID).html()=== "X"){
			$("#"+clickedID).html("0");
		} else {
			$("#"+clickedID).html("X");
		}
	});
});