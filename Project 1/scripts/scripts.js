$(document).ready(function(){
	// clear button
	$(".clear").on("click", function(){
		$("#screen").html(0);
		return false;
	});

	// backspace button
	$(".back").on("click", function(){
		$("#screen").text(
			$("#screen").text().substr(0,$("#screen").text().length-1)
		);
		return false;
	});

	// number buttons
	$(".number").on("click", function(){
		if ($("#screen").text()==="0") {
			if ($("#screen").text().length<14) {
				$("#screen").html($("#"+this.id).text());
			}
		} else {
			if ($("#screen").text().length<14) {
				$("#screen").html($("#screen").text()+$("#"+this.id).text());
			}
		};
		return false;
	});

	// operation buttons
	$(".operation").on("click", function(){
		// if screen equals 0 and "." is pressed
		if ($("#screen").text()==="0" && $("#"+this.id).text()===".") {
			$("#screen").html($("#screen").text()+$("#"+this.id).text());
		} 
		// if screen equals 0 and "." isn't pressed
		else if ($("#screen").text()==="0") {
			$("#screen").html($("#"+this.id).text());
		} 
		// if a "." is pressed but screen is not 0
		else if ($("#"+this.id).text()===".") {
			// if there is not "."'s on the screen yet
			if ($("#screen").text().indexOf(".")<0 && $("#screen").text().length<14) {
				$("#screen").html($("#screen").text()+$("#"+this.id).text());
			}
		} 
		// if screen does not equal 0 and "." is not pressed
		else {
			if ($("#screen").text().length<14) {
				$("#screen").html($("#screen").text()+$("#"+this.id).text());
			}
		};
		return false;
	});

	// result button
	$(".result").on("click", function(){
		$("#screen").html(
			eval($("#screen").text()).toFixed(2)
		);
		return false;
	});
});