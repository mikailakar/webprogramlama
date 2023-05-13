$(document).ready(function() {
  $('body').scrollspy({ target: '#navbarNav' });

  $(window).on('activate.bs.scrollspy', function() {
    var activeSection = $('.section.show');
    activeSection.each(function() {
      $(this).removeClass('show');
    });

    var newSection = $('nav.navbar a.nav-link.active').attr('href');
    $(newSection).addClass('show');
  });

  
  $('a.nav-link').on('click', function(event) {
    if (this.hash !== '') {
      event.preventDefault();

      var hash = this.hash;
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top
        },
        800,
        function() {
          window.location.hash = hash;
        }
      );
    }
  });
});
