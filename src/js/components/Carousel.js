import { tns } from '~/tiny-slider/src/tiny-slider.module'

/**
 * Class to manage carousel components
 * @module Carousel
 */
export default class Carousel {
  /**
   * Create a Carousel object
   * @param {*} node - a HTML node
   */
  constructor (node) {
    this.node = node
  }
  /**
   * Reset the attributes passed by parameters
   * @param {*} node - a HTML node
   * @param {*} attrs - attributes to delete
   */
  resetAttrs (node, ...attrs) {
    attrs.forEach(attr => node.removeAttribute(attr))
  }
  /**
   * Get and apply background color from the classes, if any
   * @param {*} node - a HTML node
   * @param {string} classes
   */
  mapBgColor (node, classes) {
    const bgRegex = /bg_\w*/
    if (classes.match(bgRegex)) {
      const color = classes.match(bgRegex)[0].split('_').pop()
      this.setStyles(node, { 'backgroundColor': `#${color}` })
    }
  }
  /**
   * Set specified styles
   * @param {*} node - a HTML node
   * @param {Object} styles - an object with the styles
   */
  setStyles (node, styles) {
    const keys = Object.keys(styles)
    keys.forEach(key => {
      node.style[key] = styles[key]
    })
  }
  /**
   * Build carousel with tiny-slider lib
   * @param {String} container - element where carousel is going to be placed
   */
  buildCarousel (container) {
    return tns({
      autoHeight: true,
      container,
      controls: false,
      items: 1,
      mouseDrag: true,
      slideBy: 'page',
      responsive: {
        768: {
          edgePadding: 20,
          items: 3
        },
        992: {
          edgePadding: 30
        }
      }
    })
  }
  getRandom (min, max) {
    return Math.floor(Math.random() * (max - min)) + min
  }
  /**
   * Build DOM for Carousel component
   */
  buildDOM () {
    const hash = this.getRandom(0, 100)
    const carouselClass = `carousel-${hash}`
    this.node.removeChild(this.node.querySelector('h1'))
    this.resetAttrs(this.node, 'id', 'class')
    this.node.classList.add(carouselClass)

    const slides = Array.from(this.node.children)
    slides.forEach(slide => {
      const classes = slide.getAttribute('class')
      if (classes) {
        this.mapBgColor(slide, classes)
      }
      this.resetAttrs(slide, 'id', 'class')
      slide.classList.add('slide', 'column', 'centered')
      this.setStyles(slide, { 'padding': '15px' })

      const image = slide.querySelector('img')
      if (image) {
        const src = image.getAttribute('src')
        this.setStyles(slide, {
          'background': `url(${src}) no-repeat center`,
          'background-size': 'cover'
        })
        image.remove()
      }
    })

    this.buildCarousel(`.${carouselClass}`)
  }
}
