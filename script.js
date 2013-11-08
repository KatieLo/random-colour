
function generateHex (){
	var x = "#" + ("00000" + Math.floor(Math.random()*16777216).toString(16)).substr(-6);
	return x;
}

$( document ).ready(function() {

	$("button").on("click", function (){
		var backgroundColor = generateHex();
		$(document.body).css("background-color", backgroundColor)
	});

});