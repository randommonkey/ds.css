/** Class to manage banner components */
export default class Banner {
  /**
   * Create a Banner object
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
   * Parse text into HTML
   * @param {string} txt - A text like HTML
   * @returns {} Text parsed into HTML
   */
  textToDOM(txt) {
    const parser = new DOMParser()
    const document = parser.parseFromString(txt, 'text/html')
    return document.body.innerHTML
  }
  /**
   * Get and apply background color from the classes, if any
   * @param {string} classes
   */
  mapBgColor(classes) {
    const bgRegex = /bg_\w*/
    if (classes.match(bgRegex)) {
      const color = classes.match(bgRegex)[0].split('_').pop()
      this.css('backgroundColor', `#${color}`)
    }
  }
  /**
   * Get and apply banner size from the clasess, if any
   * @param {string} classes
   */
  mapBannerSize(classes) {
    const sizeRegex = /size_\w*/
    if (classes.match(sizeRegex)) {
      const size = classes.match(sizeRegex)[0].split('_').pop()
      this.addToClassList(this.node, `${size}-section`)
    }
  }
  /**
   * Add CSS styles to node
   * @param {string} property - CSS property name
   * @param {string} value - CSS property value
   */
  css(property, value) {
    this.node.style[property] = value
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

    // Regex for evaluations
    const multiRegex = /multi/
    const singleRegex = /single/

    this.mapBgColor(classes)
    this.mapBannerSize(classes)

    // Define columns, if any
    if (classes.match(singleRegex)) {
      this.addToClassList(this.node, 'column', 'centered')
      const title = this.node.querySelector('.level2').querySelector('h2').textContent
      const subtitle = this.node.querySelector('.level3').querySelector('h3').textContent
      const link = this.node.querySelector('a').outerHTML
      // Set image as background, if any
      const image = this.node.querySelector('img')
      if (image) {
        const src = this.node.querySelector('img').getAttribute('src')
        this.css('background', `url(${src}) no-repeat center center`)
        this.css('backgroundSize', 'cover')
      }
      const template = `
        ${title ? `<h1>${title}</h1>` : ''}
        ${subtitle ? `<h3>${subtitle}</h3>` : ''}
        ${link ? `${link}` : ''}
      `
      this.node.innerHTML = this.textToDOM(template)
    } else if (classes.match(multiRegex)) {
      this.addToClassList(this.node, 'grid')
      // Add center classes to columns
      Array.from(this.node.querySelectorAll('[class*=col]')).forEach(col => {
        const colsRegex = /col-\w*/
        const column = col.getAttribute('class').match(colsRegex)[0]
        this.resetAttr(col)
        this.addToClassList(col, 'column', 'centered', column)
      })
    }
  }
}