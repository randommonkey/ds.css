import Swiper from 'swiper'
import { breakpoints } from '../utils'

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

const setGapBetweenSlides = (slider, options) => {
  return !hasAttribute(slider, 'data-gap')
    ? options
    : {
      ...options,
      spaceBetween: Number.parseInt(slider.getAttribute('data-gap')) || 0
    }
}

const setSlidesPerView = (slider, options) => {
  const slidesOnPc = Number.parseInt(slider.getAttribute('data-pc')) || 1
  const slidesOnTablet = Number.parseInt(slider.getAttribute('data-tablet')) || slidesOnPc
  const slidesOnMobile = Number.parseInt(slider.getAttribute('data-mobile')) || slidesOnTablet
  return {
    ...options,
    slidesPerView: slidesOnPc,
    slidesPerGroup: slidesOnPc,
    breakpoints: {
      // Selected from sass/vars.scss as breakpoint for mobile
      [breakpoints.sm]: {
        slidesPerView: slidesOnMobile,
        slidesPerGroup: slidesOnMobile
      },
      // Selected from sass/vars.scss as breakpoint for tablets
      [breakpoints.md]: {
        slidesPerView: slidesOnTablet,
        slidesPerGroup: slidesOnTablet
      }
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
    options = setGapBetweenSlides(slider, options)
    options = setSlidesPerView(slider, options)
    new Swiper(slider, options) /* eslint no-new: off */
  }
}
