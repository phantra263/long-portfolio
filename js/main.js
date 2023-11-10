 // Scroll to top
$(window).scroll(function() {
  const scrollPosition = $(this).scrollTop();
  const returnTopButton = $('#return-to-top');
  
  if (scrollPosition >= 50) {
    returnTopButton.fadeIn(200);
  } else {
    returnTopButton.fadeOut(200);
  }
});
$('#return-to-top').click(function() { // When button is clicked
  $('body,html').animate({
    scrollTop: 0 // Scroll to top of body
  }, 500);
});