const fonts = []

class Utilities {
  constructor (node) {
    this.node = node
    this.applyTextColor()
    this.getFonts()
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
  titleCase (str) {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    })
  }
  getFonts () {
    // Get for root node
    this.evalFont(this.node)
    // Get for children, if any
    const children = Array.from(this.node.getElementsByTagName('*'))
    children.forEach(element => this.evalFont(element))
  }
  evalFont (node) {
    const classes = node.getAttribute('class')
    const fontRegex = /font_\w*\W*\w*/
    if (classes && classes.match(fontRegex)) {
      const font = this.titleCase(classes.match(fontRegex)[0].split('_').pop().replace('-', ' '))
      this.setStyles({ 'font-family': `${font}, sans-serif` })
      fonts.push(font)
    }
  }
}

export { Utilities, fonts }
