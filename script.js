$(document).ready(function() {
  
    $('a[href^="#"]').on('click', function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1000);
    });

    /
    $('#contactForm').on('submit', function(event) {
        event.preventDefault();
        alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
    });
});