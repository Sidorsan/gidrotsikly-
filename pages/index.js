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

$(function () {
    $('input[placeholder], textarea[placeholder]').blur();
    $('.serMemdd').change(function () {
        var k = $(this).val();
      if (k == '1') {
          console.log('1');
            $("#serMemtb").attr("placeholder", "Type a name (Lastname, Firstname)").blur();
        }
        else if (k == '2') {
            $("#serMemtb").attr("placeholder", "Type an ID").blur();
        }
        else if (k == '3') {
            $("#serMemtb").attr("placeholder", "Type a Location").blur();
        }
    });
});
$(".search__form-top").on("click", function () {
     $(".search__input").attr("placeholder", (("введите " + $( "input:checked" ).val()))).blur();
  });