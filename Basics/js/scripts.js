// *************** facebook button
(function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.5";
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));

// ************** twitter button
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');

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
// *************** submit button event listener
  $("#submitter").on("click", function() {
      var comment = $('#message-box').val();
      var name = $('#name').val();
      var phone = $('#phonenumber').val();
      var email = $('#emailaddress').val();
      console.log(comment);
      if (comment==="") {
        $('#submitter').attr("type","button");
        $('#message-box').css("border-color","red");
        $('#message-box').css("border-width","2px");
      } else {
        $('#visible-name').html(name);
        $('#visible-phone').html(phone);
        $('#visible-email').html(email);
        $('#visible-comment').html('Your message: '+comment);
        $('#name').hide();
        $('#phonenumber').hide();
        $('#emailaddress').hide();
        $('#message-box').hide();
        $('#submitter').hide();
      };
      
      return false;
      // no code here!
  });
// *************** text field event listener
  $('#message-box').on("keyup",function(){
    var charCount = $('#message-box').val().length
    console.log(charCount);
    $('#char-count').html(charCount);
    if (charCount>50) {
      $('#char-count').css("color","red");
    } else {
      $('#char-count').css("color","black");
    };
  });

}); // end of document ready