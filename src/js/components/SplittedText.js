/**
 * Class to manage splitted text components
 * @module SplittedText
 */
export default class SplittedText {
  /**
   * Create a SplittedText object
   * @param {*} node - a HTML node
   */
  constructor (node) {
    this.node = node
  }
  /**
   * Reset class and id attributes
   */
  resetAttr () {
    this.node.removeAttribute('id')
    this.node.removeAttribute('class')
  }
  /**
   * Build DOM structure for splitted text component
   */
  buildDOM () {
    this.node.removeChild(this.node.querySelector('h1'))
    const classes = this.node.getAttribute('class')
    this.resetAttr()
    const posRegexp = /init_\w*/
    if (classes.match(posRegexp)) {
      const position = classes.match(posRegexp)[0].split('_').pop()
      this.node.classList.add(position.toLowerCase())
    } else {
      this.node.classList.add('right')
    }
    this.node.classList.add('splitted-text', 'container')
  }
}
