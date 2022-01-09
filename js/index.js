// skills generate
new Skills('left-side__skills', 'HTML', 4).render();
new Skills('left-side__skills', 'SASS/CSS', 4).render();
new Skills('left-side__skills', 'Javascript', 4).render();
new Skills('left-side__skills', 'PHP & MySQL', 2).render();
new Skills('left-side__skills', 'Node JS', 1).render();
new Skills('left-side__skills', 'Git', 2).render();
new Skills('left-side__skills', 'Webpack', 2).render();
new Skills('left-side__skills', 'Typescript', 1).render();
new Skills('left-side__skills', 'Figma', 3).render();
new Skills('left-side__skills', `Adobe Illustrator`, 3).render();
new Skills('left-side__skills', `Adobe Photoshop`, 3).render();
new Skills('left-side__skills', `Adobe InDesign`, 2).render();
new Skills('left-side__skills', `UI/UX`, 2).render();
new Skills('left-side__skills', `Internet marketing`, 3).render();
new Skills('left-side__skills', `Web design`, 3).render();
new Skills('left-side__skills', `System Administrator`, 5).render();
new Skills('left-side__skills', `PC Maintenance`, 5).render();
new Skills('left-side__skills', `Desktop Support`, 5).render();


// btn more info

const leftSide = document.querySelector('.left-side');
const rightSide = document.querySelector('.right-side');
const body = document.querySelector('body');
const closeBtn = document.querySelector('.left-side__button');

const navBtn = document.querySelector('.nav-btn');
const navMenu = document.querySelector('.nav-menu');

navBtn.addEventListener('click', openMenu);

closeBtn.addEventListener('click', openLeftSide);
leftSide.addEventListener('scroll', fixedPos);

function init() {
    navBtn.style.left = rightSide.getBoundingClientRect().right - 65 + 'px';
    navMenu.style.left = rightSide.getBoundingClientRect().right - 65 + 'px';
    navMenu.classList.remove('show-nav-menu');
    fixedPos();
    if (document.documentElement.clientWidth <= 1024) {
        let w = getComputedStyle(leftSide).width;
        w = parseInt(w);
        leftSide.style.left = -w + 40 + 'px';
        leftSide.style.position = 'fixed';

    } else if (document.documentElement.clientWidth > 1024) {

        leftSide.style.position = '';
        leftSide.classList.remove('open-left');
        body.style.overflow = '';
        leftSide.style.left = '0px';

    }
}
init()
window.addEventListener('resize', init)

function openLeftSide() {

    let w = getComputedStyle(leftSide).width;
    w = parseInt(w);

    if (leftSide.classList.contains('open-left')) {
        leftSide.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        leftSide.style.left = -w + 40 + 'px';
        leftSide.classList.remove('open-left');
        body.style.overflow = '';
        leftSide.style.overflowY = 'hidden';
        closeBtn.classList.remove('show');
        closeBtn.style.backgroundImage = 'url(./assets/svg/more.svg)';
        navBtn.style.display = 'flex';

    } else {
        leftSide.style.left = '0px';
        leftSide.classList.add('open-left');
        body.style.overflow = 'hidden';
        leftSide.style.overflowY = 'scroll';
        closeBtn.style.backgroundImage = 'url(./assets/svg/close.svg)';
        navBtn.style.display = 'none';

    }

}


function fixedPos() {

    const windowInnerHeight = window.innerHeight;
    let posBtn = windowInnerHeight - windowInnerHeight * 0.4;
    closeBtn.style.marginTop = leftSide.scrollTop + posBtn + 'px';
}
fixedPos()
//----

const imgs = document.querySelectorAll('.left-side__icon');
const hobbieBox = document.querySelector('.left-side__hobbies-items');

hobbieBox.addEventListener('mouseover', createTip);


function createTip(event) {

    let coordMouseClick = this.getBoundingClientRect();
    let offSet = event.target.offsetWidth;
    let realX = event.clientX - coordMouseClick.left - offSet;
    event.target.classList.contains('left-side__icon') ? generateTip(event.target, realX) : false;
}

function generateTip(e, X) {
    let div = document.createElement('div');
    div.classList.add('left-side__tip');
    div.innerHTML = e.alt;
    div.style.left = X + 'px';
    hobbieBox.append(div)
    hobbieBox.removeEventListener('mouseover', createTip);
    setTimeout(delTip, 2300);
    setTimeout(() => {
        hobbieBox.addEventListener('mouseover', createTip)
    }, 700);

    function delTip() {
        div.remove();
        // hobbieBox.addEventListener('mouseover', createTip);
    }

}

imgs.forEach(item => {
    item.addEventListener('mouseover', drawIcon);
    item.addEventListener('mouseleave', unDrawIcon);
})

function drawIcon(e) {
    e.target.src = `./assets/svg/${e.target.alt}_o.svg`;
}

function unDrawIcon(e) {
    e.target.src = `./assets/svg/${e.target.alt}.svg`;
}

// menu



function openMenu() {

    navBtn.style.animation = ' navBtnUp 0.5s cubic-bezier(0, .53, .94, 0)';
    if (navMenu.classList.contains('show-nav-menu')) {
        document.querySelector('.main').removeEventListener('click', closeMenu);
        closeMenu();

    } else {
        navMenu.classList.add('show-nav-menu');
        navMenu.style.left = rightSide.getBoundingClientRect().right - 265 + 'px';
        navMenu.style.top = '50px';
        navBtn.classList.add('span-rotate');
        document.querySelector('.main').addEventListener('click', closeMenu);
    }

    setTimeout(() => {
        navBtn.style.animation = 'border-transform 7s linear infinite';
    }, 700)

}

function closeMenu() {
    navBtn.classList.remove('span-rotate');
    navMenu.classList.remove('show-nav-menu');
    navMenu.style.left = rightSide.getBoundingClientRect().right - 65 + 'px';
    navMenu.style.top = '10px';
    document.querySelectorAll('.nav-menu__link').forEach(item => {
        item.style.textDecoration = 'none';
    })
}

navMenu.addEventListener('click', setStyleLink);

function setStyleLink(e) {
    document.querySelectorAll('.nav-menu__link').forEach(item => {
        item.style.textDecoration = 'none';
    })

    if (e.target.classList.contains('nav-menu__link')) {
        e.target.style.textDecoration = 'line-through';
        e.target.style.textDecorationColor = '#BF4F32';
        // e.target.style.textDecorationStyle = 'wavy';
        e.target.style.textDecorationThickness = '5px';
        setTimeout(() => {
            closeMenu()
        }, 300);
    }

}