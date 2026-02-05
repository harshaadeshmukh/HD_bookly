const searchForm = document.querySelector('.search-form');

document.getElementById('search-btn').onclick = ()=>{
    searchForm.classList.toggle('active');
};

const loginForm = document.querySelector('.login-form-container');

document.getElementById('login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
};

document.getElementById('close-login-btn').onclick = () =>{
    loginForm.classList.remove('active');
};

const header2 = document.querySelector('.header .header-2');
const fixed = header2.offsetTop;
window.onscroll = ()=>{
    searchForm.classList.remove('active');
    if (window.scrollY >= fixed) {
        header2.classList.add('active');
    }
    else{
        header2.classList.remove('active');
    }
}

window.onload = ()=>{
    if (window.scrollY >= fixed) {
        header2.classList.add('active');
    }
    else{
        header2.classList.remove('active');
    }
    fadeOut();
}

function loader()
{
  document.querySelector(".loader-container").classList.add("active");
}

function fadeOut() {
  setTimeout(loader, 2000);
}

var swiper = new Swiper(".books-slider", {
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3 ,
    },
  },
});

var swiper = new Swiper(".featured-slider", {
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

var swiper = new Swiper(".arrivals-slider", {
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".reviews-slider", {
  loop:true,
  grabCursor: true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".blogs-slider", {
  loop:true,
  grabCursor: true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});