$(function(){

  $('.thankyou').show();

  $('header a').click(function(){
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html, body').animate({
      'scrollTop': position-130
    }, 1000);
  });

  $('#site-title').click(function(){
    $('html, body').animate({
      'scrollTop': 0
    }, 1500);
  });

  $('#footer-title').click(function(){
    $('html, body').animate({
      'scrollTop': 0
    }, 1500);
  });

  var showContents = $('.show-contents');
  showContents.hide();
  $(window).scroll(function(){
    if($(this).scrollTop()>300){
      showContents.fadeIn(2000);
    }else{
      showContents.fadeOut();
    }
  });

  $('#hidden-switch').click(function(){
    $('#hidden-menu').fadeIn();
  });

  $('#close').click(function(){
    $('#hidden-menu').fadeOut();
  });

  $('.slideshow').each(function(){
    var $slides = $(this).find('img'),
        $slideCount = $slides.length,
        currentIndex = 0;
        $slides.eq(currentIndex).fadeIn();
        
        setInterval(showNextSlide,7500);
        function showNextSlide(){
          var nextIndex = (currentIndex + 1) % slideCount;
          $slides.eq(currentIndex).fadeOut();
          $slides.eq(nextIndex).fadeIn();
          currentIndex = nextIndex;
        }
      });
});

/* js rotate example

CSS
.rotateH, .rotateW {
    position: relative;
    width: 400px;
    height: 300px;
}
.rotateH img, .rotateW img {
    position: absolute;
    top: 0;
    left: 0;

JavaScript
$(function() {
    var rotationSpeed = 150;

    // 縦回転の初期設定
    $('.rotateH .reverse').each(function() {
        $(this).css({
            height: 0,
            marginTop: $(this).height() / 2
        });
    });

    // 縦回転の処理
    $(".rotateH").hover(function() {
        // 表面の非表示
        $('.surface', this).animate({
            height: 0,
            marginTop: $(this).height() / 2
        }, rotationSpeed);
        // 裏面の表示
        $('.reverse', this).delay(rotationSpeed).animate({
            height: $(this).height(),
            marginTop: '0'
        }, rotationSpeed);
    }, function() {
        // 裏面の非表示
        $('.reverse', this).animate({
            height: 0,
            marginTop: $(this).height() / 2
        }, rotationSpeed);
        // 表面の表示
        $('.surface', this).delay(rotationSpeed).animate({
            height: $(this).height(),
            marginTop: '0'
        }, rotationSpeed);
    });

 js rotate example end*/

/* message show

$('#works-image').hover(
  function(){
    $('#show-message').css('display','block');
    $('#show-message').css('z-index',-1);
  },
  function(){
    $('#show-message').css('display','none');
  }
);
 show message end */
