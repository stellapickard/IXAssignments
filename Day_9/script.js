$(document).ready(function(){

$(document).mousemove(function(e) {
    $('.mouse').offset({
        left: e.pageX,
        top: e.pageY + 20
    });
});


$("body").on("keypress", function(e){
	if (event.which === 103){
		$(".text").css("color", "green");
	} else if (event.which === 98){
		$(".text").css("color", "blue");
	}
});

var count = 0; 

$(document).on("click", function(){
	count++;
	$(".clicks").html("This page has been clicked "+count);
});


});


