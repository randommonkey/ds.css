/**
 * Class to manage iframe components
 * @module Iframe
 */
export default class Iframe {
  /**
   * Create a Iframe object
   * @param {*} node - a HTML node
   */
  constructor (node) {
    this.node = node
  }
  /**
   * Reset specified attributes for a specified node
   * @param {*} node
   * @param {*} attrs
   */
  resetAttr (node, ...attrs) {
    attrs.forEach(attr => node.removeAttribute(attr))
  }
  /**
   * Set styles to a node
   * @param {*} node - a HTML node
   * @param {Object} styles - CSS styles
   */
  setStyles (node, styles) {
    const keys = Object.keys(styles)
    keys.forEach(key => {
      node.style[key] = styles[key]
    })
  }
  /**
   * Map iframe height, if any
   * @param {String} classes
   */
  mapIframeHeight (iframeContainer, classes) {
    const iframe = iframeContainer.querySelector('iframe')
    const heightRegex = /height_\w*/
    if (classes.match(heightRegex)) {
      const height = parseInt(classes.match(heightRegex)[0].split('_').pop(), 10)
      this.setStyles(iframe, { 'height': `${height}px` })
      return
    }
    this.setStyles(iframeContainer, {
      'height': '0',
      'padding-bottom': '56.25%',
      'position': 'relative',
      'width': '100%'
    })
    this.setStyles(iframe, {
      'height': '100%',
      'left': '0',
      'position': 'absolute',
      'top': '0',
      'width': '100%'
    })
  }
  /**
   * Build DOM structure for splitted text component
   */
  buildDOM () {
    this.node.removeChild(this.node.querySelector('h1'))
    const classes = this.node.getAttribute('class')
    this.resetAttr(this.node, 'id', 'class')
    this.node.classList.add('iframe-container')
    this.mapIframeHeight(this.node, classes)
  }
}
