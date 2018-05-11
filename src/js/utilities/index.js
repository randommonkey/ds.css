export default class Utilities {
  constructor (node) {
    this.node = node
    this.applyTextColor()
  }
  /**
   * Get and apply text color, if any
   */
  applyTextColor () {
    const classes = this.node.getAttribute('class')
    const txtRegex = /textColor_\w*/
    if (classes && classes.match(txtRegex)) {
      const color = classes.match(txtRegex)[0].split('_').pop()
      this.setStyles({ 'color': `#${color}` })
    }
  }
  /**
   * Add styles to root node
   * @param {Object} - styles object
   */
  setStyles (styles) {
    const keys = Object.keys(styles)
    keys.forEach(key => {
      this.node.style[key] = styles[key]
    })
  }
}
