$(document).ready(function() {
    $('#slide').swiper({
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 'auto',
        paginationClickable: true,
        direction: 'horizontal',
        watchSlidesVisibility: true,
        effect: 'coverflow',
        coverflow: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true
        },
        autoplaying: true,
        allowSwipeToPrev: true
    });
    var width = window.screen.width;

    if (width > 1024 || width <= 1280) {
        var aImg = $('.banner .swiper-slide img');
        $('.customized .bg img').attr('src', './images/server_bg_1280.jpg');
        $('.dynamic .bg img').attr('src', './images/dynamic_1280.jpg');
        for (var i = 0, length = aImg.length; i < length; i++) {
            $(aImg[i]).attr('src', './images/banner/' + (i + 1) + '_1280.jpg');
        }
    }
    if (width > 1360 || width <= 1360) {
        var aImg = $('.banner .swiper-slide img');
        $('.customized .bg img').attr('src', './images/server_bg_1360.jpg');
        $('.dynamic .bg img').attr('src', './images/dynamic_1360.jpg');
        for (var i = 0, length = aImg.length; i < length; i++) {
            $(aImg[i]).attr('src', './images/banner/' + (i + 1) + '_1360.jpg');
        }
    }
    if (width > 1360 || width <= 1440) {
        var aImg = $('.banner .swiper-slide img');
        $('.customized .bg img').attr('src', './images/server_bg_1440.jpg');
        $('.dynamic .bg img').attr('src', './images/dynamic_1440.jpg');
        for (var i = 0, length = aImg.length; i < length; i++) {
            $(aImg[i]).attr('src', './images/banner/' + (i + 1) + '_1440.jpg');
        }
    }
    if (width > 1440 || width <= 1600) {
        var aImg = $('.banner .swiper-slide img');
        $('.customized .bg img').attr('src', './images/server_bg_1600.jpg');
        $('.dynamic .bg img').attr('src', './images/dynamic_1600.jpg');
        for (var i = 0, length = aImg.length; i < length; i++) {
            $(aImg[i]).attr('src', './images/banner/' + (i + 1) + '_1600.jpg');
        }
    }
    if (width > 1600 || width <= 1680) {
        var aImg = $('.banner .swiper-slide img');
        $('.customized .bg img').attr('src', './images/server_bg_1680.jpg');
        $('.dynamic .bg img').attr('src', './images/dynamic_1680.jpg');
        for (var i = 0, length = aImg.length; i < length; i++) {
            $(aImg[i]).attr('src', './images/banner/' + (i + 1) + '_1680.jpg');
        }
    }
    if (width == 1920) {
        var aImg = $('.banner .swiper-slide img');
        $('.customized .bg img').attr('src', './images/server_bg.jpg');
        $('.dynamic .bg img').attr('src', './images/dynamic.jpg');
        for (var i = 0, length = aImg.length; i < length; i++) {
            $(aImg[i]).attr('src', './images/banner/' + (i + 1) + '.jpg');
        }
    }
    $(window).scroll(function() {
        if ($(document).scrollTop() > 50) {
            $('.fixedBox').css('display', 'block');
            $('.nav').addClass('fixed');
        }
        if ($(document).scrollTop() < 50) {
            $('.fixedBox').css('display', 'none');
            $('.nav').removeClass('fixed');
        }
    })
    $('.nav .nav_menu ul li').on('click',function(){
      $(this).find('a')[0].click();
    })

});
var iSpeed = 0;
var left = 0;
function initialy(e) {
  var aLi = $('.nav .nav_menu ul li');
  var listBg = aLi[aLi.length - 1];
  for (i = 0; i < aLi.length - 1; i++) {
      aLi[i].addEventListener('mouseover',
          function() {
              startMove(listBg, this.offsetLeft, this.offsetWidth, this.offsetHeight);
          },
          false);
  }
  for (i = 0; i < aLi.length - 1; i++) {
      aLi[i].addEventListener('mouseout',
          function() {
              clearListBg(listBg, this.offsetWidth, this.offsetHeight);
          },
          false);
  }
}
window.addEventListener('load', initialy, false);

function startMove(obj, iTarget, width, height) {

    obj.style.width = width + 'px';
    obj.style.height = height + 'px';
    clearInterval(obj.timer);

    obj.timer = setInterval(function() {
        iSpeed += (iTarget - obj.offsetLeft) / 5;
        iSpeed *= 0.75;
        left += iSpeed;

        if (Math.abs(iSpeed) < 1 && Math.abs(left - iTarget) < 1) {
            clearInterval(obj.timer);
            obj.style.left = iTarget + 'px';
        } else {
            obj.style.left = left + 'px';
        }


    }, 30);
}

function clearListBg(obj, width, height) {
    obj.style.width = '0px';
    obj.style.height = '0px';
}
