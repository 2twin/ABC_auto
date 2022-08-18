$(function() {
  $('.car__button-buy').on('click', function(event) {
    event.preventDefault();
    $('.popup-buy').removeClass('closed');
    $('.overlay').removeClass('closed');
    $('body').css('overflow','hidden');
  })

  $('.popup-buy__close').on('click', function(event) {
    event.preventDefault();
    $('.popup-buy').addClass('closed');
    $('.overlay').addClass('closed');
    $('body').css('overflow','visible');
  })

  function openCreditPopup(event) {
    event.preventDefault();
    $('.popup-credit').removeClass('closed');
    $('.overlay').removeClass('closed');
    $('body').css('overflow','hidden');
  }

  $('.car__button-credit').on('click', openCreditPopup);
  $('.credit__button').on('click', openCreditPopup);

  $('.popup-credit__close').on('click', function(event) {
    event.preventDefault();
    $('.popup-credit').addClass('closed');
    $('.overlay').addClass('closed');
    $('body').css('overflow','visible');
  })

  $('.slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 425,
        settings : {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      }
    ]
  });
})