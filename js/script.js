const spans = document.querySelectorAll('h1 span');
spans.forEach(span => span.addEventListener('mouseover', function (e) {
    span.classList.add('animated', 'rubberBand');
}));
spans.forEach(span => span.addEventListener('mouseout', function (e) {
    span.classList.remove('animated', 'rubberBand');
}));

const flutterBar = document.querySelector('.bar-flutter');
const nodeBar = document.querySelector('.bar-node');
const firebaseBar = document.querySelector('.bar-firebase');
const socketBar = document.querySelector('.bar-socket');

var t1 = new TimelineLite();

t1.fromTo(flutterBar, .75, { width: `calc(0% - 6px)` }, { width: `calc(85% - 6px)`, ease: Power4.easeOut }).fromTo(nodeBar, .75, { width: `calc(0% - 6px)` }, { width: `calc(80% - 6px)`, ease: Power4.easeOut }).fromTo(firebaseBar, .75, { width: `calc(0% - 6px)` }, { width: `calc(70% - 6px)`, ease: Power4.easeOut }).fromTo(socketBar, .75, { width: `calc(0% - 6px)` }, { width: `calc(80% - 6px)`, ease: Power4.easeOut })

const controller = new ScrollMagic.Controller()
const scene = new ScrollMagic.Scene({
    triggerElement: '.skills',
    triggerHook: 0
}).setTween(t1).addTo(controller)

const showRequiredCategory = event => {
    console.log('event triggered');
    const getId = event.id
    const links = document.querySelectorAll('.work-category button')
    for (i = 0; i < links.length; i++) {
        if (links[i].hasAttribute('class')) {
            links[i].classList.remove('active')
        }
    }

    event.classList.add('active')
    const getCategory = document.querySelector(`.category-${getId}`)
    const categories = document.querySelectorAll('div[class^="category-"]')
    for (i = 0; i < categories.length; i++) {
        if (categories[i].hasAttribute('class')) {
            categories[i].classList.remove('showCategory')
            categories[i].classList.add('hideCategory')
        }
    }

    getCategory.classList.remove('hideCategory')
    getCategory.classList.add('showCategory')
}