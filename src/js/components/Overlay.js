/**
 * Class to manage overlay components
 * @module Overlay
 */
export default class Overlay {
  /**
   * Create a Overlay object
   * @param {*} node - a HTML node
   */
  constructor (node) {
    this.node = node
  }
  /**
   * Reset class and id attributes
   * @param {*} node - a HTML node
   */
  resetAttr (node, ...attrs) {
    attrs.forEach(attr => node.removeAttribute(attr))
  }
  /**
   * Add styles to specified node
   * @param {*} node - a HTML node
   * @param {Object} styles - styles object
   */
  setStyles (node, styles) {
    const keys = Object.keys(styles)
    keys.forEach(key => {
      node.style[key] = styles[key]
    })
  }
  /**
   * Build overlay DOM structure
   * @param {*} node - a HTML node
   */
  buildOverlay (node) {
    // Set id and new classes of overlay
    const classes = node.getAttribute('class')
    const overlayName = classes.match(/overlay_\w*/)[0].split('_').pop()
    this.resetAttr(node, 'id', 'class')
    node.classList.add('overlay', 'column', 'v-centered')
    node.setAttribute('id', overlayName)

    // Get inner HTML
    const content = node.innerHTML

    // Wrap content into inner div
    const wrapper = document.createElement('div')
    wrapper.classList.add('overlay-content', 'container', 'column')
    wrapper.innerHTML = content

    // Add close button
    const close = document.createElement('a')
    close.setAttribute('href', '#')
    close.classList.add('overlay-close', 'item-end')
    close.innerText = 'Cerrar'
    this.setStyles(close, { 'text-decoration': 'none' })
    wrapper.insertBefore(close, wrapper.children[0])

    // Set wrapper as node HTML
    node.innerHTML = wrapper.outerHTML
  }
  /**
   * Build DOM structure for text component
   */
  buildDOM () {
    this.node.removeChild(this.node.querySelector('h1'))
    this.resetAttr(this.node, 'id', 'class')
    this.node.classList.add('overlay-container')

    const overlays = Array.from(this.node.querySelectorAll('[class*=overlay]'))
    overlays.forEach(overlay => this.buildOverlay(overlay))
  }
}
