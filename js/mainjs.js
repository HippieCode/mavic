
  
  $(document).ready(function(){
    $('.slick-slider').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        arrows: true,
        prevArrow: '<div class="slider-arrows__inner slider-arrows__left"><img class="slider-arrows" src="images/prev.svg" alt=""></div>',
        nextArrow: '<div class="slider-arrows__inner slider-arrows__right"><img class="slider-arrows" src="images/next.svg" alt=""></div>',
      });

$('.tabs-btn').on('click', function(){
    $('.tabs-item').removeClass('active-tab');
    $(this).parent().addClass('active-tab');
});

$('.mobile-btn').on('click', function(){
  $('.header-menu').toggleClass('menu-active');
});

$('.mobile-btn').on('click', function(){
  $('.mobile-btn__item').toggleClass('close');
});
  });


  // const anchors = document.querySelectorAll('a[href*="#"]')

  // for (let anchor of anchors) {
  //   anchor.addEventListener('click', function (e) {
  //     e.preventDefault()
      
  //     const blockID = anchor.getAttribute('href').substr(1)
      
  //     document.getElementById(blockID).scrollIntoView({
  //       behavior: 'smooth',
  //       block: 'start'
  //     })
  //   })
  // }