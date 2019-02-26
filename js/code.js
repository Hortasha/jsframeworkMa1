$(document).ready(() => {
    $('#slider').css('width', '100%');
    $('#slider').css('text-align', 'center');
    $('#slider img').css('display', 'none');
    $('#slider img').css('width', '75%');

    $('#slider img:first').css('display', 'inline');

    let slides = $('#slider img').length
    let slide = 1;
    let currentSlide = $('#slider img:first');

    setInterval(() => {
        if(slide < slides) {
            nextSlide(currentSlide.next(), currentSlide);
            currentSlide = currentSlide.next();
            slide++;
        } else {
            nextSlide($('#slider img:first'), currentSlide);
            currentSlide = $('#slider img:first');
            slide = 1;
        }
    }, 5000);
});

function nextSlide(next, current) {
    current.css('display', 'none');
    next.css('width', '0');
    next.css('display', 'inline');
    next.animate({
        width: '75%'
    }, "fast");
}