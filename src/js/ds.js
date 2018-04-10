/** Class to manage splitted text components */
class SplittedText {
  /**
   * Create a SplittedText object
   * @param {*} node - a HTML node
   */
  constructor(node) {
    this.node = node
  }
  /**
   * Reset class and id attributes
   */
  resetAttr() {
    this.node.removeAttribute('id')
    this.node.removeAttribute('class')
  }
  /**
   * Build DOM structure for splitted text component
   */
  buildDOM() {
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
    this.node.classList.add('splitted-text')
  }
}

const splittedTexts = Array.from(document.querySelectorAll('[id^=splitted]'))
splittedTexts.forEach(sT => new SplittedText(sT).buildDOM())

/** Class to manage banner components */
class Banner {
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

const banners = Array.from(document.querySelectorAll('[id^=banner]'))
banners.forEach(banner => new Banner(banner).buildDOM())

/** Class to manage search components */
class Search {
  /**
   * Create a Search object
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
   * Set attributes to a give nove
   * @param {*} node - a HTML node
   * @param {object} attrs - Object with attribute name and attribute value
   */
  setAttr(node, attrs) {
    const keys = Object.keys(attrs)
    keys.forEach(key => node.setAttribute(key, attrs[key]))
  }
  /**
   * Add CSS styles to node
   * @param {*} node - a HTML node
   * @param {string} property - CSS property name
   * @param {string} value - CSS property value
   */
  css(node, property, value) {
    node.style[property] = value
  }
  /**
   * Build DOM structure for banner component
   */
  buildDOM() {
    this.node.removeChild(this.node.querySelector('h1'))
    this.resetAttr(this.node)
    this.node.classList.add('search')

    const list = this.node.querySelector('ul') || this.node.querySelector('ol')
    const items = Array.from(list.getElementsByTagName('li'))

    const input = document.createElement('input')
    this.setAttr(input, { type: 'text', placeholder: 'Buscar' })
    this.node.insertBefore(input, list)

    input.addEventListener('keyup', (event) => {
      const filter = event.target.value.toLowerCase()
      items.forEach(item => {
        item.textContent.toLowerCase().includes(filter) ?
          this.css(item, 'display', 'list-item') :
          this.css(item, 'display', 'none')
      })
    })
  }
}

const searchs = Array.from(document.querySelectorAll('[id^=search]'))
searchs.forEach(s => new Search(s).buildDOM())

/** Class to manage search components */
class Box {
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

const boxes = Array.from(document.querySelectorAll('[id^=boxes]'))
boxes.forEach(box => new Box(box).buildDOM())