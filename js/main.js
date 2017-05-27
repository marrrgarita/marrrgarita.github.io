$(document).ready(function() {

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
  clickMainLinks(contactLink, contactElement)

  //hide elements that should be hidden
  $('.skill-icons').hide();

  //toggle hidden divs

  $('#skill-show').on('click', function(){
    $(".skill-icons").toggle(500);
    $("#skill-show i").toggleClass('fa-caret-down fa-caret-up');
  });


});
