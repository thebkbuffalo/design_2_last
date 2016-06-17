$(document).ready(function(){
  console.log('link me up scottie');
  smoothScroll.init({
    speed: 750
  });

  $('#workPublic1').on('shown.bs.modal', function () {
    $('#myInput').focus()
  });


 $('.public_img_slider').slick({
  //  dots: true,
    centerMode: true,
    arrows: true,
    // infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });

  $('.public_header').on('click', function(){
    if($('.public_txt').css('display') == 'none'){
      $('.public_txt').show();
    }else{
      $('.public_txt').hide();
    }
  });
});
