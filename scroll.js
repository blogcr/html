$(document).ready(function() {

$(window).scroll(function() {

  if ($(window).scrollTop() > 500) { $('#at4-share').slideDown(500); $('#anotherthing').fadeIn(1000);
  }
  if ($(window).scrollTop() < 500) { $('#at4-share').slideUp(500); $('#anotherthing').fadeOut(1000);
  }
});
});
