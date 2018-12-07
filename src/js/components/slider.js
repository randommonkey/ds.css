import Swiper from 'swiper'

const sliders = [...document.querySelectorAll('.slider')]

const hasAttribute = (slider, attr) => {
  return slider.hasAttribute(attr)
}

const enablePagination = (slider, options) => {
  return !hasAttribute(slider, 'data-pagination')
    ? options
    : {
      ...options,
      pagination: {
        clickable: true,
        el: '.swiper-pagination'
      }
    }
}

const enableNavigation = (slider, options) => {
  return !hasAttribute(slider, 'data-navigation')
    ? options
    : {
      ...options,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    }
}

const enableLoop = (slider, options) => {
  return !hasAttribute(slider, 'data-loop')
    ? options
    : {
      ...options,
      loop: true
    }
}

const enableAutoplay = (slider, options) => {
  return !hasAttribute(slider, 'data-autoplay')
    ? options
    : {
      ...options,
      autoplay: {
        delay: Number.parseFloat(slider.getAttribute('data-autoplay')) * 1000 || 3000
      }
    }
}

if (sliders) {
  for (const slider of sliders) {
    let options = { grabCursor: true, preloadImages: false, lazy: true }
    options = enablePagination(slider, options)
    options = enableNavigation(slider, options)
    options = enableLoop(slider, options)
    options = enableAutoplay(slider, options)
    new Swiper(slider, options) /* eslint no-new: off */
  }
}
