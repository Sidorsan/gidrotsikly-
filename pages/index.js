$(function () {

  $('.sliderBanner__slider').slick({
    arrows: false,
    appendDots: $('.sliderBanner__dots'),
    dots: true,
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

    waitForAnimate: false,
    responsive: [
      {
        breakpoint: 1120,
        settings: {
          slidesToShow: 3,
          dots: true,
          appendDots: $('.popular__dots'),
        },


      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 2,
          dots: true,
          appendDots: $('.popular__dots'),
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          dots: true,
          appendDots: $('.popular__dots'),

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

    waitForAnimate: false,
    responsive: [
      {
        breakpoint: 1120,
        settings: {
          slidesToShow: 3,
          dots: true,
          appendDots: $('.additionalItem__dots'),
        },

      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 2,
          dots: true,
          appendDots: $('.additionalItem__dots'),
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          dots: true,
          appendDots: $('.additionalItem__dots'),
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



  $(window).on('scroll', function () {

    if ($(window).scrollTop() > 0 && $('.burger-nav').hasClass('burger-nav--open') === false) {
      $('.burger').addClass('burger--follow')
    } else {
      $('.burger').removeClass('burger--follow')
    }
  })

})


//
// ul-select
// https://github.com/zgreen/ul-select
//

$.fn.ulSelect = function () {
  var ul = $(this);

  if (!ul.hasClass('zg-ul-select')) {
    ul.addClass('zg-ul-select');
  }


  $('li:first-of-type', this).addClass('active');
  $(this).on('click', 'li', function (event) {

    // Remove div#selected if it exists
    if ($('#selected--zg-ul-select').length) {
      $('#selected--zg-ul-select').remove();
    }
    // ul.before('<div id="selected--zg-ul-select">');
    var selected = $('#selected--zg-ul-select');

    ul.toggleClass('active');
    // Remove active class from any <li> that has it...
    ul.children().removeClass('active');
    // And add the class to the <li> that gets clicked
    $(this).toggleClass('active');

    var selectedText = $(this).text();
    if (ul.hasClass('active')) {
      selected.text(selectedText).addClass('active');
    }
    else {
      selected.text('').removeClass('active');
      $('li.active', ul);
    }
  });

  $(document).on('click', function (event) {
    if ($('ul.zg-ul-select').length) {
      if (!$('ul.zg-ul-select').has(event.target).length == 0) {
        return;
      }
      else {
        $('ul.zg-ul-select').removeClass('active');
        $('#selected--zg-ul-select').removeClass('active').text('');

      }
    }
  });
}

// Run
$('.popular__filter-box').ulSelect();
$('.additionalItem__filter-box').ulSelect();




