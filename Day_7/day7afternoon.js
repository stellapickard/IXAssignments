$( document ).ready(function() {
    console.log( "ready!" );


// change the color of the text in the div with class "color-div" to red

// use onclick event
$(".the-button").on("click", function(){
	changeColor(); 
});

function changeColor() {
	$(".color-div").css("color", "red");
}

// add the word "blue" to the div with class "add-div"


function addToDiv() {
	$(".add-div").html("My favourite colour is blue"); 
}
addToDiv();


// add a title to the page


addTitle();

function addTitle() {
	$(".title-div").html("Old Title");
}

// alert the text in the selected item of the dropdown
$("#selector").on("change", function(){ 
	getSelected();
});

function getSelected() {
	alert($("#selector option:selected").text()); 
	
}

// change the title to be "New Title"

$(".text-changer").on("click", function() {
	changeText();
}); 

function changeText() {
	$(".title-div").html("New Title");
}


$("#allie").on("click", function(){
	$(".clicked-id").html("you clicked on id: allie");
});

$("#rafi").on("click", function(){
	$(".clicked-id").html("you clicked on id: rafi");
});

$("#yay").on("click", function(){
	$(".clicked-id").html("you clicked on id: yay");
});

$(document).ready(function() {

  $('.the-button').click(function(){ 
    //hint: what goes in here?
	});
	


  $(".trio").click(function (e) {
    //hint: look at the currentTarget property
  });

});

});