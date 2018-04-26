/**
 * Class to manage text components
 * @module Text
 */
export default class Text {
  /**
   * Create a Text object
   * @param {*} node - a HTML node
   */
  constructor (node) {
    this.node = node
  }
  /**
   * Reset class and id attributes
   * @param {*} node - a HTML node
   */
  resetAttr (node) {
    node.removeAttribute('id')
    node.removeAttribute('class')
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
   * Build DOM structure for text component
   */
  buildDOM () {
    this.node.removeChild(this.node.querySelector('h1'))
    this.resetAttr(this.node)
    this.node.classList.add('post')

    const elements = Array.from(this.node.firstElementChild.children)
    this.node.removeChild(this.node.firstElementChild)
    elements.forEach(element => {
      const classes = element.getAttribute('class')
      this.node.appendChild(element)
      element.classList.add('post-container')
      if (classes && classes.match(/fullwidth/)) {
        element.classList.remove('post-container')
      }
    })

    const images = this.node.querySelectorAll('img')
    if (images) {
      images.forEach(image => this.setStyles(image, { 'max-width': '100%', 'display': 'block', 'margin': '0 auto' }))
    }
  }
}
