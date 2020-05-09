$(document).ready(function() {

$(window).scroll(function() {

  $('#at4-share').hide();
  if ($(window).scrollTop() < 500) { $('#at4-share').addClass("hidden");
  }
  if ($(window).scrollTop() > 500) { $('#at4-share').removeClass("hidden");
  }
});
});
