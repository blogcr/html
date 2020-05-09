$(document).ready(function() {

$(window).scroll(function() {

  if ($(window).scrollTop() <= 500) { $('#at4-share').hidden=true;
  }
  if ($(window).scrollTop() > 500) { $('#at4-share').hidden=false;
  }
});
});
