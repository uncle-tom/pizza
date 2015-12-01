$(document).ready(function() {
  var translate_arr = ['20px,-50px', "50px,-20px", "50px,20px", "20px,50px", "-20px, 50px", "-50px, 20px", "-50px, -20px", "-20px, -50px"];

  $('svg path').mouseover(function(e){
    var i = $(this).data('index');
    $(this).css({transform: 'translate('+translate_arr[i-1]+')', transitionDuration: '2s', function(){
      $('.pie'+i).fadeIn(1000);
      $('.pie'+i+' li').animate({"padding-bottom":"10px"});
    }});
  });

  $('svg path').mouseout(function(e){
    var i = $(this).data('index');
    $(this).css({transform: 'translate(0px,0px)', transitionDuration: '2s'});
    $('.pie'+i).fadeOut(500, function(){
      $('.pie'+i+' li').animate({"padding-bottom":"150px"})
    });
  });
});