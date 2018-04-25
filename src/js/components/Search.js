/** Class to manage search components */
export default /** Class to manage search components */
class Search {
  /**
   * Create a Search object
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
   * Set attributes to a give nove
   * @param {*} node - a HTML node
   * @param {object} attrs - Object with attribute name and attribute value
   */
  setAttr (node, attrs) {
    const keys = Object.keys(attrs)
    keys.forEach(key => node.setAttribute(key, attrs[key]))
  }
  /**
   * Add CSS styles to node
   * @param {*} node - a HTML node
   * @param {string} property - CSS property name
   * @param {string} value - CSS property value
   */
  css (node, property, value) {
    node.style[property] = value
  }
  /**
   * Build DOM structure for banner component
   */
  buildDOM () {
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
        item.textContent.toLowerCase().includes(filter)
          ? this.css(item, 'display', 'list-item')
          : this.css(item, 'display', 'none')
      })
    })
  }
}
