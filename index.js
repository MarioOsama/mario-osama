
AOS.init({once: true,});

$(document).ready(function(){
   setInterval(animateImg);
});

function animateImg(){
  var position = $(".lang-img").offset().top;
  $(".lang-img").animate({top:'+=10'}, {duration: 1000});
  $(".lang-img").animate({top:'-=10'}, {duration: 1000});
}

$(".media-icon").animate({opacity: '1'});
