$(document).ready(function() {

$(window).scroll(function() {

  if ($(window).scrollTop() < 500) { $('#at4-share').hide();
  }
  if ($(window).scrollTop() > 500) { $('#at4-share').show();
  }
});
});
