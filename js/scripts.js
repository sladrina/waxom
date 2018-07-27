var slideout = new Slideout({
    'panel': document.getElementById('container'),
    'menu': document.getElementById('mobile-menu'),
    'padding': 256,
    'tolerance': 120,
    'distanceToOpen': 50,
    'side': 'right'
});

document.querySelector('.js-slideout-toggle').addEventListener('click', function() {
    slideout.toggle();
    return false;
});

document.querySelector('.menu').addEventListener('click', function(eve) {
    if (eve.target.nodeName === 'A') { slideout.close(); }
});
