$(document).ready(function(){
	// clear button
	$(".clear").on("click", function(){
		$("#screen").html(0);
		return false;
	});

	//number buttons
	$(".number h1").on("click", function(){
		console.log(this.id);
		console.log($("#4").val());
		return false;
	});
});