$(document).ready(function() {
    $(document).ready(function() {
        $('.selection.dropdown').dropdown();
    })
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
              console.log('aaa');
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

    console.log(obj.offsetLeft);
    console.log(iTarget);
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
