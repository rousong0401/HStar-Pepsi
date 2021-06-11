(function ($) {
  const preload = () => {
    //loading
    setTimeout(function () {
      $('.loading').addClass('is-loaded');
      setTimeout(function () {
        AOS.init({
          once: true
        });
      }, 800);
    }, 2800);
  };
  const openMenu = () => {
    // 點擊漢堡選單顯示nav
    $('.header__burger').on('click', function () {
      $('.mobile-nav').addClass('is-active');
    });

    $('.mobile-close ').on('click', function () {
      $('.mobile-nav').removeClass('is-active');
    });

  };
  const goTop = () => {
    // 點擊滑動到特定區塊
    $('.video__scrollArrow').on('click', function () {
      $('html,body').animate({
        scrollTop: 0
      }, 700);
    });
  };
  const goAnchor = () => {
    // 觸發錨點
    $('[data-href]').on('click', function () {
      let target = $(this).data('href');
      let headerHeight = $('.header').outerHeight();
      let targetPosition = $(target).offset().top;
      $('.mobile-nav').removeClass('is-active');
      $('html,body').animate({
        scrollTop: targetPosition - headerHeight
      }, 700);
    });
  };
  const toggleModal = () => {
    // 觸發modal
    $('.login__send').on('click', function () {
      $('.modal').addClass('is-active');
      $('body').addClass('overflow-hidden');
    });

    // 取消modal
    $('.modal__close').on('click', function () {
      $('.modal').removeClass('is-active');
      $('body').removeClass('overflow-hidden');
    });
  };
  const initSwiper = () => {
    // modal swiper
    const modalSwiper = new Swiper('.modal .swiper-container', {
      slidesPerView: 'auto',
      autoplay: {  // 自動撥放
        delay: 4000,
        disableOnInteraction: false, // 用手操控swiper後一樣會自動輪播
      },
      pagination: {
        el: '.modal .swiper-pagination',
        type: 'bullets',
      },
      navigation: {
        nextEl: '.modal .swiper-button-next',
        prevEl: '.modal .swiper-button-prev',
      }
    });
  };
  $(function () {
    openMenu();
    goTop();
    goAnchor();
    toggleModal();
    initSwiper();
  });
  $(window).on('load', () => {
    preload();
  })
})(jQuery);