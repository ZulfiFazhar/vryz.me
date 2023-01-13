const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');
const stopScroll = document.querySelector('body');

menuToggle.addEventListener('click', function(){
    nav.classList.toggle('slide');
    stopScroll.classList.toggle('stop-scrolling');
    // document.body.style.overflow.toggle = "hidden"
})

// let mainBg = document.getElementById('parallax');W

// window.addEventListener('scroll', function () {
//     let value = window.scrollY;
//     mainBg.style.top = value * 0.4 + 'px';
// });