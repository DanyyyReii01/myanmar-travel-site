let page1Text1 = document.querySelector('.start-text1')
let introFrontImg = document.querySelector('.start-front-img')
let page1Text2 = document.querySelector('.start-text2')
let header = document.querySelector('header');
let introMap = document.querySelector('.intro-map');
let introTextBox = document.querySelector('.intro-text-box');

let value = window.scrollY;
console.log(value);

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    console.log(value);
        
    page1Text1.style.marginLeft = value * 2.5 + 'px';
    page1Text2.style.marginTop = value  * 0.5 + 'px';
    header.style.marginTop = value * 0.7 + 'px';

    if (value > 800) {
        value -= 800;

        introTextBox.style.left = value * 0.3 + 'px';
    }
    
});

