//google map

var map;
      function initMap() {
        var myLatLng = {lat: 57.309993, lng: -4.444201}

        map = new google.maps.Map(document.getElementById('map'), {
          center: myLatLng,
          zoom: 8
        });

        var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'The is the little bugger!'
        });
      }

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
// *************** works section
  var i=0;
  while (i<works.length) {
    $('#work').append('\
      <div class="col-xs-12 col-sm-6 col-md-3">\
        <a href="'+works[i].url+'" class="work-img">\
          <img src="' + works[i].pic + '" class="img-responsive">\
          <span class="info"><p class="proj-title">Title: </p>' + works[i].title + '</span>\
        </a>\
      </div>\
    ');
    var images = $('#work img');
    if (i % 2 === 0) {
      $(images[i]).css("border", "2px solid DodgerBlue") 
    } else {
      $(images[i]).css("border", "2px solid salmon") 
    }
    i=i+1;
  }
   //************* project titles
  $('.work-img').mouseenter(function(){
    $('.info', this).show();
  }).mouseleave(function(){
    $('.info', this).hide();
  }); 

    
    
}); // end of document ready