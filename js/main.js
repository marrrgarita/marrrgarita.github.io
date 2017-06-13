$(document).ready(function() {

  $('#back-to-top').css('opacity','0');
  $(window).scroll(function(){

    if ($(this).scrollTop()>150){
        $('#back-to-top').css('opacity','1').css('transition','0.3s ease-in-out');
        // $('a').css('font-size', '98%').css('transition','0.3s ease-in-out');
      }else if ($(this).scrollTop()>100){
        $('#back-to-top').css('opacity','.75').css('transition','0.3s ease-in-out');
      }else if ($(this).scrollTop()>60){
        $('#back-to-top').css('opacity','.5').css('transition','0.3s ease-in-out');
      }else{
        $('#back-to-top').css('opacity','0').css('transition','0.3s ease-in-out');
        // $('a').css('font-size', '100%').css('transition','0.3s ease-in-out');
      }
  });


  //animate scroll to dofferent sections

  var aboutLink    = $('#about-link');
  var aboutElement = $('#about');

  var workLink     = $('#work-link');
  var workElement  = $('#work');

  var contactLink    = $('#contact-link');
  var contactElement = $('#contact');


  function clickMainLinks(link, someElement) {
    link.on('click', function(e){
      e.preventDefault();
      e.stopPropagation();
      $('html,body').animate({scrollTop: someElement.offset().top});
    });
  }

  clickMainLinks(aboutLink, aboutElement);
  clickMainLinks(workLink, workElement);
  clickMainLinks(contactLink, contactElement);

  //hide elements that should be hidden
  $('.skill-icons').hide();

  //toggle hidden divs

  $('#skill-show').on('click', function(){
    $(".skill-icons").toggle(500);
    $("#skill-show i").toggleClass('fa-caret-down fa-caret-up');
  });

 //
 // $('#rendezyou').on('mouseenter', function(){
 //   $('#rendezyou').attr("src", "assets/margarita.jpg");
 // })
 //
 // $('#rendezyou').on('mouseleave', function(){
 //   $('#rendezyou').attr("src", "assets/rendezyou.png");
 // })

});
