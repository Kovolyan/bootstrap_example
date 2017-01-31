$('.slick').slick({
   
    dots: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4,

    responsive: [
        {
          breakpoint: 1200,
          settings: {
           centerMode: true,
            slidesToShow: 3,
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 992,
          settings: {
            centerMode: true,
            slidesToShow: 2,
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 768,
          settings: {
            centerMode: true,
            slidesToShow: 2,
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 544,
          settings: {
            centerMode: true,
            slidesToShow: 1,
            slidesToShow: 2,
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
    ]
});



 $(document) .ready(function(){

  $(function (){
    $("#back-top") .hide() ;

    $(window) .scroll (function (){
      if ($(this) .scrollTop() > 700) {
        $("#back-top") .fadeIn();
      } else{
        $("#back-top") .fadeOut();
      }
    });

    $("#back-top a") .click(function (){
      $("body,html") .animate({
        scrollTop:0
      }, 800);
      return false;
      });
  });  
});

