$(document).ready(function() {

$(window).scroll(function() {

  if ($(window).scrollTop() > 500) { $('#at4-share').style.visibility = "hidden";
  }
  if ($(window).scrollTop() < 500) { $('#at4-share').display = "none";
  }
});
});
