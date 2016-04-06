// *************** facebook button
(function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.5";
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));

$("#submitter").on("click", function() {
      console.log("clicked");
      return false;
      // no code here!
	});

$(document).ready(function(){
// *************** smooth scrolling
	var $root = $('html, body');
      $('.navbar-nav a').click(function() {
        var href = $.attr(this, 'href');
        $root.animate({
            scrollTop: $(href).offset().top
        }, 500, function () {
            window.location.hash = href;
        });
        return false;
     });
// *************** tooltip
     $(function () {
     	$('#tooltip1').tooltip();
     });
// *************** tooltip
     $(function () {
     	$('[data-toggle="tooltip"]').tooltip();
     });
// *************** stellar
     $('#contactme').stellar();

     $("#submitter").on("click", function() {
      console.log("clicked");
      return false;
      // no code here!
	});

});