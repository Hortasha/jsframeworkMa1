$(document).ready(() => {
    const $slider = $('#slider');
    const $imges = $('#slider img');
    const $firstImg = $('#slider img:first');

    $slider.css('width', '100%');
    $slider.css('text-align', 'center');
    $imges.css('display', 'none');
    $imges.css('width', '100%');
    $imges.css('position', 'relative');
    $imges.css('right', '1000px')
    $firstImg.css('display', 'inline');
    $firstImg.css('right', '0');


    const slides = $imges.length - 1;
    let slide = 0;

    let slideNavItems = "";
    $imges.each(function() {
        slideNavItems += '<div class="slideNav--item"></div>';
    });


    $slider.append(
        '<div id="slideNav">' +
            slideNavItems +
        '</div>'
    );

    const $slideItem = $('.slideNav--item');
    
    $slideItem.css('border-radius', '50%');
    $slideItem.css('height', '10px');
    $slideItem.css('width', '10px');
    $slideItem.css('background-color', 'black');
    $slideItem.css('display', 'inline-block');
    $slideItem.css('margin', '5px');
    $('.slideNav--item:first').css('background-color', 'red')
    

    $slideItem.click(function() {
        nextSlide($slideItem.index(this), slide);
        slide = $slideItem.index(this);
    });

    setInterval(() => {
        if(slide < slides) {
            nextSlide(slide+1, slide);
            slide++;
        } else {
            nextSlide(0, slide);
            slide = 0;
        }
    }, 5000);
});

function nextSlide($next, $current) {
    console.log($current, $next)
    $($('#slider img')[$current]).css('display', 'none' );
    $($('#slider img')[$current]).css('right', '1000px' );

    $($('#slider img')[$next]).css('display', 'inline')
    $($('#slider img')[$next]).animate({
        right: '0'
    }, 'fast', 'linear');
    $($('.slideNav--item')[$current]).css('background-color', 'black')
    $($('.slideNav--item')[$next]).css('background-color', 'red');
}