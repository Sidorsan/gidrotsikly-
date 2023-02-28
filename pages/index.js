$(function () {

  $('.sliderBanner__slider').slick({
    arrows: false,
    appendDots: $('.sliderBanner__dots'),
    dots: true,
    adaptiveHeight: true,
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


  // var mixer = mixitup('.popular__cardList');
  
  // console.log(mixer);

  $('.popular__filter-btn').on('click', function () {
    $('.popular__filter-btn').removeClass('filter-btn--active')
    $(this).addClass('filter-btn--active')
  })
})

$(function () {
  // var mixer = mixitup('.additionalItem__cardList');
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

// var filtered = false;
// $('.popular__filter-box li button').on('click',function(){
//     $('.popular__filter-box li button').removeClass('active');
//   var filter = $(this).data('filter');
//   console.log(filter);
//     if(filter=='all'){
//         $('.popular__cardList').slick('slickUnfilter');
//     }else if(filter == '.popular__card--spareParts') {
//         $('.popular__cardList').slick('slickUnfilter').slick('slickFilter', filter);
//     } else if (filter == '.popular__card--motors') {
//        $('.popular__cardList').slick('slickUnfilter').slick('slickFilter', filter);
//     }
//     $(this).addClass('active');
//     filtered = true;
// }); 



  // $(".popular__filter-box li button").on('click', function () {
  //   var filter = $(this).data('filter');
  //   console.log(filter);
  //   $(".popular__cardList").slick('slickUnfilter');

  //   if (filter == '.popular__card--spareParts') {
  //     console.log(1);
  //     $(".popular__cardList").slick('slickUnfilter').slick('slickFilter', '.popular__card--spareParts');
  //   }
  //   else if (filter == '.popular__card--motors') {
  //           console.log(2);
  //     $(".popular__cardList").slick('slickUnfilter').slick('slickFilter', '.popular__card--motors');
  //   }
  //   else if (filter == '.popular__card--tyres') {
  //     console.log(3);
  //     $(".popular__cardList").slick('slickUnfilter').slick('slickFilter', '.popular__card--tyres');
  //   }
  //   else if (filter == '.popular__card--electronics') {
  //     console.log(4);
  //     $(".popular__cardList").slick('slickUnfilter').slick('slickFilter', '.popular__card--electronics');
  //   }
  //   else if (filter == '.popular__card--tools') {
  //     console.log(5);
  //     $(".popular__cardList").slick('slickUnfilter').slick('slickFilter', '.popular__card--tools');
  //   }
  //   else if (filter == '.popular__card--accessory') {
  //     console.log(6);
  //     $(".popular__cardList").slick('slickUnfilter').slick('slickFilter', '.popular__card--accessory');
  //   }

  // })




