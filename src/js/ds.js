/** Class to manage splitted text sections */
class SplittedText {
  /**
   * Create a SplittedText object
   * @param {*} node - an HTML node
   */
  constructor(node) {
    this.node = node
  }
  /**
   * Build DOM structure for splitted text component
   */
  buildDOM() {
    this.node.removeAttribute('id')
    const classes = this.node.getAttribute('class')
    this.node.setAttribute('class', '')
    const posRegexp = /init_\w*/
    if (classes.match(posRegexp)) {
      const position = classes.match(posRegexp)[0].split('_').pop()
      this.node.classList.add(position.toLowerCase())
    } else {
      this.node.classList.add('right')
    }
    this.node.classList.add('splitted-text')
    this.node.removeChild(this.node.querySelector('h1'))
  }

}

const splittedTexts = Array.from(document.querySelectorAll('[id^=splitted]'))
splittedTexts.forEach(sT => new SplittedText(sT).buildDOM())

function textToDom (txt) {
  const parser = new DOMParser()
  const document = parser.parseFromString(txt, 'text/html')
  return document.body.innerHTML
}

// Banner
const banners = Array.from(document.querySelectorAll('[id^=banner]'))
console.log(banners)

function mapBannerSize (size) {
  return `${size}-section`
}

function mapBgColor (color) {
  return `#${color}`
}

banners.forEach(banner => {
  // Get classes
  const classes = banner.getAttribute('class')

  // Remove h1 by default
  banner.removeChild(banner.querySelector('h1'))

  // Regex for evaluations
  const bgRegex = /bg_\w*/
  const sizeRegex = /size_\w*/
  const multiRegex = /multi/
  const singleRegex = /single/
  const colsRegex = /col-\w*/g
  
  // Reset classes
  banner.setAttribute('class', '')

  // Search for background color, if any
  if (classes.match(bgRegex)) {
    const color = mapBgColor(classes.match(bgRegex)[0].split('_').pop())
    // Apply background color
    banner.style.backgroundColor = color;
  }
  
  // Search banner size, if any
  if (classes.match(sizeRegex)) {
    const size = classes.match(sizeRegex)[0].split('_').pop()
    banner.classList.add(mapBannerSize(size))
  }

  // Define columns, if any
  if (classes.match(singleRegex)) {
    banner.classList.add('column', 'centered')
    const title = banner.querySelector('.level2').querySelector('h2').textContent
    const subtitle = banner.querySelector('.level3').querySelector('h3').textContent
    const link = banner.querySelector('a').outerHTML
    // Set image as background, if any
    const image = banner.querySelector('img')
    if (image) {
      const src = banner.querySelector('img').getAttribute('src')
      banner.style.background = `url(${src}) no-repeat center center`
    }
    const template = `
      ${title ? `<h1>${title}</h1>` : ''}
      ${subtitle ? `<h3>${subtitle}</h3>` : ''}
      ${link ? `${link}` : ''}
    `
    banner.innerHTML = textToDom(template)
  } else if (classes.match(multiRegex)) {
    banner.classList.add('grid')
    // Add center classes to columns
    Array.from(banner.querySelectorAll('[class*=col]')).forEach(col => col.classList.add('column', 'centered'))
  }

  // Remove id attr
  // banner.removeAttribute('id')
  // // Create columns
  // if (classes.match(/col-\w*/g)) {
  //   const columns = classes.match(/col-\w*/g).map(col => {
  //     const column = document.createElement('div')
  //     column.classList.add(col, 'column', 'centered')
  //     return column
  //   })
  //   console.log(columns)
  // }
})
