const infoBtns = document.querySelectorAll('.info-dot');
const infoHints = document.querySelectorAll('.info-hint')

// click on hint buttons

for ( let btn of infoBtns) {
    btn.addEventListener('click', showHint);
}

function showHint(e) {
    e.stopPropagation();

    // hide hints on click
    for ( let hint of infoHints) {
        hint.classList.add('none');
    }

    // show current hint
    this.parentNode.querySelector('.info-hint').classList.toggle('none');
}

// Close hints by clicking on website

document.addEventListener('click', closeHints);

function closeHints() {
    for ( let hint of infoHints) {
        hint.classList.add('none');
    }
}

// Disabling onclick closing of hint

for ( let hint of infoHints) {
    hint.addEventListener('click', (e) => e.stopPropagation());
}

// swiper

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',

    slidesPerView: 1,
    spaceBetween: 42,

    breakpoints: {
  
        600: {
           slidesPerView: 2,
           spaceBetween: 20,
        },

        920: {
           slidesPerView: 3,
           spaceBetween: 20,
        },

        1230: {
           slidesPerView: 4,
           spaceBetween: 42,
        },
   },
   
    freeMode: true,
  
  
    // Navigation arrows
    navigation: {
      nextEl: '#sliderNext',
      prevEl: '#sliderPrev',
    },

  });

//tabs

const tabsBtns = document.querySelectorAll('[data-tab]');
const tabsProducts = document.querySelectorAll('[data-tab-value]');

for (let btn of tabsBtns) {
    btn.addEventListener('click', function () {
		// Adding active tab
		for (let btn of tabsBtns) {
			btn.classList.remove('tab-controls__btn--active');
		}

		// removing active tab
		this.classList.add('tab-controls__btn--active');


    //category filter
    for (let product of tabsProducts) {

        //all button
        if (this.dataset.tab === 'all') {
            product.classList.remove('none');
        } else {
            if(product.dataset.tabValue === this.dataset.tab) {
                product.classList.remove('none');
            } else {
                product.classList.add('none');
            }
        }   
        
    }

    // swiper update after category filter

    swiper.update();
    
    } )
    
}

// mobile nav

const mobileNavOpenBtn = document.querySelector('#open-mobile-nav-btn');
const mobileNavCloseBtn = document.querySelector('#close-mobile-nav-btn');
const mobileNav = document.querySelector('#mobile-nav');

mobileNavOpenBtn.onclick = function () {
    mobileNav.classList.add('mobile-nav-wrapper--open');
}

mobileNavCloseBtn.onclick = function () {
    mobileNav.classList.remove('mobile-nav-wrapper--open');
}