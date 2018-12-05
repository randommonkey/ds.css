import Swiper from 'swiper'

const sliders = [...document.querySelectorAll('.slider')]

const addPagination = options => {
  return {
    ...options,
    pagination: {
      clickable: true,
      el: '.swiper-pagination'
    }
  }
}

const addNavigation = options => {
  return {
    ...options,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  }
}

const addLoop = options => {
  return {
    ...options,
    loop: true
  }
}

if (sliders) {
  for (const slider of sliders) {
    let options = { grabCursor: true }
    options = slider.hasAttribute('data-pagination') ? addPagination(options) : options
    options = slider.hasAttribute('data-navigation') ? addNavigation(options) : options
    options = slider.hasAttribute('data-loop') ? addLoop(options) : options
    new Swiper(slider, options) /* eslint no-new: off */
  }
}
