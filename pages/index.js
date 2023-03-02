$(function () {

  $('.sliderBanner__slider').slick({
    arrows: false,
    appendDots: $('.sliderBanner__dots'),
    dots: true,
    // variableWidth: true,
    //  centerMode: true,
    slidesToShow: 1,

  })
  $('.sliderBanner__next').on('click', function (e) {
    e.preventDefault()
    $('.sliderBanner__slider').slick('slickNext');
  })
  $('.sliderBanner__prev').on('click', function (e) {
    e.preventDefault()
    $('.sliderBanner__slider').slick('slickPrev');
  })

})

$(".search__form-top").on("click", function () {
  $(".search__input").attr("placeholder", (("введите " + $("input:checked").val()))).blur();
});

$(function () {
  var mixerOne = mixitup('.popular__mixItUp', {
    controls: {
      scope: 'local'
    }
  });

  var mixerTwo = mixitup('.additionalItem__mixItUp', {
    controls: {
      scope: 'local'
    }
  });

  $('.popular__filter-btn').on('click', function () {
    $('.popular__filter-btn').removeClass('filter-btn--active')
    $(this).addClass('filter-btn--active')

  })
  $('.additionalItem__filter-btn').on('click', function () {
    $('.additionalItem__filter-btn').removeClass('filter-btn--active')
    $(this).addClass('filter-btn--active')
  })
})




$(function () {
  $('.popular__cardList').slick({
    arrows: false,
    slidesToShow: 4,
    infiniti: true,
    draggable: false,
    waitForAnimate: false,
     responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          draggable: true,
          dots: true,
        }
      },

    ]
  });
  $('.popular__cardList-next').on('click', function (e) {
    e.preventDefault()
    $('.popular__cardList').slick('slickNext');
  })
  $('.popular__cardList-prev').on('click', function (e) {
    e.preventDefault()
    $('.popular__cardList').slick('slickPrev');
  })
})

$(function () {
  $('.additionalItem__cardList').slick({
    arrows: false,
    slidesToShow: 4,
    infiniti: true,
    draggable: false,
    waitForAnimate: false,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          draggable: true,
          dots: true,
        }
      },

    ]
  });
  $('.additionalItem__cardList-next').on('click', function (e) {
    e.preventDefault()
    $('.additionalItem__cardList').slick('slickNext');
  })
  $('.additionalItem__cardList-prev').on('click', function (e) {
    e.preventDefault()
    $('.additionalItem__cardList').slick('slickPrev');
  })
})


$(function () {
    $('.card-like').on('click', function (e) {
    e.preventDefault()
    $(this).toggleClass('card-like--active');
    })
  
   $('.burger, .overlay, .burger-nav a').on('click', function (e) {
    e.preventDefault();
    $('.burger-nav').toggleClass('burger-nav--open')
    $('.overlay').toggleClass('overlay--show')
    $('.burger').toggleClass('burger--open')
  })
  //  $('.burger, .overlay, .header__top a').on('click', function (e) {
  //   e.preventDefault();
  //   $('.header__top').toggleClass('header__top--open')
  //   $('.overlay').toggleClass('overlay--show')
  //   $('.burger').toggleClass('burger--open')
  // })

 

 $(window).on('scroll', function () {
  
   if ($(window).scrollTop() > 0 && $('.burger-nav').hasClass('burger-nav--open') === false) {
     $('.burger').addClass('burger--follow')
   } else {
     $('.burger').removeClass('burger--follow')
   }
 })
})


