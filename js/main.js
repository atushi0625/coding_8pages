'use strict';


// ハンバーガーメニュー

$(function () {
     $('#hamburger').on('click', function () {
          $('#header-menu-sp').toggleClass('open');
          $(this).toggleClass('is-active');
     });
});

// ドロップダウンサブメニュー
$(function () {
     $('#dropdown').hover(
          function () {
               $(this).children('.header-sub-menu').addClass('open-submenu');
          },
          function () {
               $(this).children('.header-sub-menu').removeClass('open-submenu');

          });

});





// 小塚ゴシック Pr6N

(function (d) {
     var config = {
               kitId: 'sru0qjw',
               scriptTimeout: 3000,
               async: true
          },
          h = d.documentElement,
          t = setTimeout(function () {
               h.className = h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive";
          }, config.scriptTimeout),
          tk = d.createElement("script"),
          f = false,
          s = d.getElementsByTagName("script")[0],
          a;
     h.className += " wf-loading";
     tk.src = 'https://use.typekit.net/' + config.kitId + '.js';
     tk.async = true;
     tk.onload = tk.onreadystatechange = function () {
          a = this.readyState;
          if (f || a && a != "complete" && a != "loaded") return;
          f = true;
          clearTimeout(t);
          try {
               Typekit.load(config)
          } catch (e) {}
     };
     s.parentNode.insertBefore(tk, s)
})(document);


// Put your application javascript here

// const swiper = new Swiper('.swiper', {
//      // Optional parameters
//      direction: 'horizontal',

//      // Navigation arrows
//      navigation: {
//           nextEl: '.swiper-button-next',
//           prevEl: '.swiper-button-prev',
//           disabledClass: '.swiper-button-disabled',
//      },
//      // autoHeight: true,
//      slidesPerView: 1,
//      effect: 'slide',
//      centeredSlides: true

// });

// ファーストビューアニメーション
const swiper = new Swiper('.swiper', {
     direction: 'horizontal',
     loop: true,
     speed: 1500,
     effect: 'slide',
     autoplay: {
          delay: 4000,
     }
});


$(function () {
     //スクロールに応じてヘッダーの背景色が変化
     $(window).scroll(function () {
          if ($(this).scrollTop() > 0) {
               $('.header__container').addClass('active');
               $('.header-menu').addClass('boder-none');
          } else {
               $('.header__container').removeClass('active');
               $('.header-menu').removeClass('boder-none');
          }
     });
});