const scroller = document.querySelector('.rf-cards-scroller-crop');
const scrollLeft = document.getElementById('scroll-left');
const scrollRight = document.getElementById('scroll-right');


scrollLeft.addEventListener('click', () => {
    scroller.scrollBy({ left: -200, behavior: 'smooth' });
});

scrollRight.addEventListener('click', () => {
    scroller.scrollBy({ left: 200, behavior: 'smooth' });
});