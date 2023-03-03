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

$.fn.ulSelect = function(){
  var ul = $(this);

  if (!ul.hasClass('zg-ul-select')) {
    ul.addClass('zg-ul-select');
  }
  // SVG arrow
  var arrow = '<svg id="ul-arrow" xmlns="http://www.w3.org/2000/svg" version="1.1" width="32" height="32" viewBox="0 0 32 32"><line stroke-width="1" x1="" y1="" x2="" y2="" stroke="#449FDB" opacity=""/><path d="M4.131 8.962c-0.434-0.429-1.134-0.429-1.566 0-0.432 0.427-0.432 1.122 0 1.55l12.653 12.528c0.434 0.429 1.133 0.429 1.566 0l12.653-12.528c0.432-0.429 0.434-1.122 0-1.55s-1.136-0.429-1.566-0.002l-11.87 11.426-11.869-11.424z" fill="#111"/></svg>';
  $('li:first-of-type', this).addClass('active').append(arrow);
  $(this).on('click', 'li', function(event){
    
    // Remove div#selected if it exists
    if ($('#selected--zg-ul-select').length) {
      $('#selected--zg-ul-select').remove();
    }
    ul.before('<div id="selected--zg-ul-select">');
    var selected = $('#selected--zg-ul-select');
    $('li #ul-arrow', ul).remove();
    ul.toggleClass('active');
    // Remove active class from any <li> that has it...
    ul.children().removeClass('active');
    // And add the class to the <li> that gets clicked
    $(this).toggleClass('active');

    var selectedText = $(this).text();
    if (ul.hasClass('active')) {
      selected.text(selectedText).addClass('active').append(arrow);
    }
    else {
      selected.text('').removeClass('active'); 
      $('li.active', ul).append(arrow);
    }
    });
    // Make ul tabbable
    /*$(ul).focus(function(){
     $(this).keydown(function(e) {
      if(e.which == 38 || 40) { // Up or down keypress
        $(this).addClass('active');
        var liActive =  $('li.active', ul);
        var liPrev = $('li.active', ul).prev();
        var liNext =  $('li.active', ul).next();
        if(e.which == 38) { // Down
          liActive.removeClass('active');
          liPrev.addClass('active');
        }
        if(e.which == 40) { // Down
          liActive.removeClass('active');
          liNext.addClass('active');
        }
      }
     });
     $(this).keydown(function(){
        if(e.which == 13) { // Down
          ul.removeClass('active');
        }
      });
    });*/
    // Close the faux select menu when clicking outside it 
    $(document).on('click', function(event){
    if($('ul.zg-ul-select').length) {
     if(!$('ul.zg-ul-select').has(event.target).length == 0) {
      return;
    }
    else {
      $('ul.zg-ul-select').removeClass('active');
      $('#selected--zg-ul-select').removeClass('active').text('');
      $('#ul-arrow').remove();
      $('ul.zg-ul-select li.active').append(arrow);
    } 
    }
    });
  }

// Run
$('#be-select').ulSelect();




