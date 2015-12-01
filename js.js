$(document).ready(function() {




  // PIE SEGMENT 1
	$('.pieSegment1').mouseover(function(e){
  $(this).css({transform: 'translate(20px,-50px)', transitionDuration: '2s', function(){
    $('.pie1').fadeIn(1000);
    $('.pie1 li').animate({"padding-bottom":"10px"})
  }})
});

$('.pieSegment1').mouseout(function(e){
  $(this).css({transform: 'translate(0px,0px)', transitionDuration: '2s'});
  $('.pie1').fadeOut(500, function(){
    $('.pie1 li').animate({"padding-bottom":"150px"})
  });
});

// PIE SEGMENT 2
$('.pieSegment2').mouseover(function(e){
  $(this).css({transform: 'translate(50px,-20px)', transitionDuration: '2s'});
  $('.pie2').fadeIn(1000);
  $('.pie2 li').animate({"padding-bottom":"10px"});
});

$('.pieSegment2').mouseout(function(e){
  $(this).css({transform: 'translate(0px,0px)', transitionDuration: '2s'});
  $('.pie2').fadeOut(500, function(){
    $('.pie2 li').animate({"padding-bottom":"150px"})
  })
});

// PIE SEGMENT 3
$('.pieSegment3').mouseover(function(e){
  $(this).css({transform: 'translate(50px,20px)', transitionDuration: '2s'});
  $('.pie3').fadeIn(1000);
  $('.pie3 li').animate({"padding-bottom":"10px"});
});

$('.pieSegment3').mouseout(function(e){
  $(this).css({transform: 'translate(0px,0px)', transitionDuration: '2s'});
  $('.pie3').fadeOut(500, function(){
    $('.pie3 li').animate({"padding-bottom":"150px"})
  });
});

// PIE SEGMENT 4
$('.pieSegment4').mouseover(function(e){
  $(this).css({transform: 'translate(20px,50px)', transitionDuration: '2s'});
  $('.pie4').fadeIn(1000);
  $('.pie4 li').animate({"padding-bottom":"10px"});
});

$('.pieSegment4').mouseout(function(e){
  $(this).css({transform: 'translate(0px,0px)', transitionDuration: '2s'});
  $('.pie4').fadeOut(500, function(){
    $('.pie4 li').animate({"padding-bottom":"150px"})
  });
});

// PIE SEGMENT 5
$('.pieSegment5').mouseover(function(e){
  $(this).css({transform: 'translate(-20px, 50px)', transitionDuration: '2s'});
  $('.pie5').fadeIn(1000);
  $('.pie5 li').animate({"padding-bottom":"10px"});
});

$('.pieSegment5').mouseout(function(e){
  $(this).css({transform: 'translate(0px,0px)', transitionDuration: '2s'});
  $('.pie5').fadeOut(1000);
});

// PIE SEGMENT 6
$('.pieSegment6').mouseover(function(e){
  $(this).css({transform: 'translate(-50px, 20px)', transitionDuration: '2s'});
  $('.pie6').fadeIn(1000);
  $('.order li').animate({"padding-bottom":"10px"});
});

$('.pieSegment6').mouseout(function(e){
  $(this).css({transform: 'translate(0px,0px)', transitionDuration: '2s'});
  $('.pie6').fadeOut(1000);
});

// PIE SEGMENT 7
$('.pieSegment7').mouseover(function(e){
  $(this).css({transform: 'translate(-50px, -20px)', transitionDuration: '2s'});
  $('.pie7').fadeIn(1000);
  $('.order li').animate({"padding-bottom":"10px"});
});

$('.pieSegment7').mouseout(function(e){
  $(this).css({transform: 'translate(0px,0px)', transitionDuration: '2s'});
  $('.pie7').fadeOut(1000);
});

// PIE SEGMENT 8
$('.pieSegment8').mouseover(function(e){
  $(this).css({transform: 'translate(-20px, -50px)', transitionDuration: '2s'});
  $('.pie8').fadeIn(1000);
  $('.order li').animate({"padding-bottom":"10px"});
});

$('.pieSegment8').mouseout(function(e){
  $(this).css({transform: 'translate(0px,0px)', transitionDuration: '2s'});
  $('.pie8').fadeOut(1000);
});
});