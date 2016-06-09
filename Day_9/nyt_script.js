$(document).ready(function(){
	var url = "" + " <insert api key> ";
	$.ajax({
		url:    ,
		method: "GET", 
		success: handleResponse, 
		error: function(error) {
			alert("error!");
		}
	});
});

function handleResponse(response){

	for (var i=0; i<response.result.length; i++) {
		$("#list").append(response.results[i].title)
	}
}