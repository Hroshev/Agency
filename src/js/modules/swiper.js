import Swiper from 'swiper/bundle';

/* About Swiper */
const aboutSwiper = new Swiper(".about__swiper", {
  slidesPerView: "auto",
  spaceBetween: 10,
  breakpoints: {
    576: {
      spaceBetween: 36,
    },
  },
});

/* Fedback Swiper */
const fedbackSwiper = new Swiper(".fedback__swiper", {
  slidesPerView: "auto",
  spaceBetween: 8,
  // autoplay: {
  //   delay: 5000
  // },
  keyboard: {
    enabled: true,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: "2",
      spaceBetween: 32,
    },
    1000: {
      slidesPerView: "3",
      spaceBetween: 32,
    },
  },
});

const fedbackPrev = document.getElementById('fedback__swiperPrev')
const fedbackNext = document.getElementById('fedback__swiperNext')


if (fedbackPrev && fedbackNext) {
  fedbackPrev.addEventListener('click', () => {
    fedbackSwiper.slidePrev();
  })
  fedbackNext.addEventListener('click', () => {
    fedbackSwiper.slideNext();
  })
}


/* Projects Swiper */
const ProjectsSwiper = new Swiper(".projects__swiper", {
  slidesPerView: "1",
  spaceBetween: 32,
  keyboard: {
    enabled: true,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const projectPrev = document.getElementById('projects__swiperPrev')
const projectNext = document.getElementById('projects__swiperNext')


if (projectPrev && projectNext) {
  projectPrev.addEventListener('click', () => {
    ProjectsSwiper.slidePrev();
  })
  projectNext.addEventListener('click', () => {
    ProjectsSwiper.slideNext();
  })
}