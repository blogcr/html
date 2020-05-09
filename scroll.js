$(document).ready(function() {

$(window).scroll(function() {

  if ($(window).scrollTop() > 500) { $('#at4-share').display = "block";
  }
  if ($(window).scrollTop() < 500) { $('#at4-share').display = "none";
  }
});
});
