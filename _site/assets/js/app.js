$('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
      return false;
    }
  }
});



window.setInterval(function() {

  var current = new Date();
  var startDate = new Date('2017-03-31T10:00:00.000-08:00')
  var endDate = new Date('2017-04-01T23:59:00:00.000-08:00')

  if (current.getTime() < startDate.getTime()) {
    $('#nominateNow').hide();
    $('#nominateNowHeader').hide();
  } else if (current.getTime() > endDate.getTime()) {
    $('#nominateNowHeader').hide();
  }

}, 0);