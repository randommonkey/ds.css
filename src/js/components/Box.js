/** Class to manage search components */
export default class Box {
  /**
   * Create a Box object
   * @param {*} node - a HTML node
   */
  constructor(node) {
    this.node = node
  }
  /**
   * Reset class and id attributes
   * @param {*} node - a HTML node
   */
  resetAttr(node) {
    node.removeAttribute('id')
    node.removeAttribute('class')
  }
  /**
   * Add styles to root node
   * @param {*} node - a HTML node
   * @param {Object} styles 
   */
  setStyles(node, styles) {
    const keys = Object.keys(styles)
    keys.forEach(key => node.style[key] = styles[key])
  }
  /**
   * Get and apply background color from the classes, if any
   * @param {*} node - a HTML node
   * @param {string} classes
   */
  mapBgColor(node, classes) {
    const bgRegex = /bg_\w*/
    if (classes.match(bgRegex)) {
      const color = classes.match(bgRegex)[0].split('_').pop()
      this.setStyles(node, { 'background-color': `#${color}` })
    }
  }
  /**
   * Get min width from classes, if any
   * @param {string} classes
   * @returns {number} minimum width
   */
  mapMinWidth(classes) {
    const mwRegex = /(minwidth|mw)_\w*/
    if (classes.match(mwRegex)) {
      return parseInt(classes.match(mwRegex)[0].split('_').pop(), 10)
    }
    return 0
  }
  /**
   * Get gap from classes, if any
   * @param {string} classes
   * @returns {number} gap value
   */
  mapGap (classes) {
    const gapRegex = /(gap|g)_\w*/
    if (classes.match(gapRegex)) {
      return parseInt(classes.match(gapRegex)[0].split('_').pop(), 10)
    }
    return 0
  }
  /**
   * Add classes to a specific node
   * @param {*} node
   * @param {string} classes
   */
  addToClassList(node, ...classes) {
    classes.forEach(c => node.classList.add(c))
  }
  /**
   * Build DOM structure for banner component
   */
  buildDOM() {
    this.node.removeChild(this.node.querySelector('h1'))
    const classes = this.node.getAttribute('class')
    
    this.resetAttr(this.node)
    this.node.classList.add('boxes')
    this.mapBgColor(this.node, classes)

    const minWidth = this.mapMinWidth(classes)
    const gap = this.mapGap(classes)
    this.setStyles(this.node, { 'display': 'grid', 'grid-template-columns': `repeat(auto-fit, minmax(${minWidth}px, 1fr))`, 'grid-gap': `${gap}px`})

    // Important: children should be written as h2 selectors in Rmd file
    const boxItems = Array.from(this.node.querySelectorAll('.level2'))
    boxItems.forEach(boxItem => {
      this.mapBgColor(boxItem, boxItem.getAttribute('class'))
      this.resetAttr(boxItem)
      this.addToClassList(boxItem, 'box', 'column', 'centered')
      this.setStyles(boxItem, { 'min-height': `${minWidth}px` })
      const image = boxItem.querySelector('img')
      if (image) {
        image.remove()
        const src = image.getAttribute('src')
        this.setStyles(boxItem, { 'background': `url(${src}) no-repeat center center`, 'background-size': 'cover' })
      }
    })
  }
}