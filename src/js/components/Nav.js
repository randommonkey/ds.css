export default class Nav {
  constructor (opts) {
    this.opts = opts
  }
  buildMenu () {
    /**
     * TEMPLATE
     * <div class="menu column v-centered"> -> menu
     *   <div class="container"> -> menuContainer
     *     <a href="link.href">{{link.label}}</a>
     *     ...
     *   </div>
     * </div>
     */
    const menu = document.createElement('div')
    menu.classList.add('menu', 'column', 'v-centered')

    const menuContainer = document.createElement('div')
    menuContainer.classList.add('container', 'column')

    const menuListItem = this.opts.links.map(link => {
      const a = document.createElement('a')
      a.classList.add('menu-link')
      a.setAttribute('href', `${link.href}.html`)
      a.textContent = link.label
      return a
    })

    menuListItem.forEach(item => menuContainer.appendChild(item))
    menu.appendChild(menuContainer)

    return menu
  }
  buildBurger () {
    /**
     * TEMPLATE
     * <div class="burger-box">
     *   <div class="burger">
     *     <span></span>
     *   </div>
     * </div>
     */

    const burgerBox = document.createElement('div')
    burgerBox.classList.add('burger-box')

    const burger = document.createElement('div')
    burger.classList.add('burger')

    const span = document.createElement('span')

    burger.appendChild(span)
    burgerBox.appendChild(burger)

    return burgerBox
  }
  buildLogo () {
    const { logo } = this.opts

    const a = document.createElement('a')
    a.classList.add('nav-logo')
    a.setAttribute('href', logo.href)

    const img = document.createElement('img')
    img.setAttribute('src', logo.image)

    a.appendChild(img)

    return a
  }
  activateBurger () {
    const nav = document.querySelector('nav')
    const burger = document.querySelector('.burger-box')
    const menu = document.querySelector('.menu')

    burger.addEventListener('click', () => {
      burger.classList.toggle('burger-open')
      menu.classList.toggle('opened')
      document.body.classList.toggle('no-scroll')
      nav.classList.toggle('active')
    })

    if (nav.classList.contains('fixed')) {
      this.affixNav(nav)
    }
  }
  affixNav (nav) {
    window.addEventListener('scroll', (event) => {
      const scrollValue = window.scrollY
      const affixed = scrollValue > 200
      if (affixed) {
        nav.classList.add('affixed')
      } else {
        nav.classList.remove('affixed')
      }
    })
  }
  buildDOM () {
    // <nav></nav>
    const navContainer = document.createElement('nav')
    navContainer.classList.add(this.opts.mode)

    const navContent = document.createElement('div')
    navContent.classList.add('container', 'line', 'justify-between', 'v-centered')

    navContent.appendChild(this.buildBurger())
    navContent.appendChild(this.buildLogo())
    navContainer.appendChild(this.buildMenu())
    navContainer.appendChild(navContent)

    document.body.insertBefore(navContainer, document.body.childNodes[0])

    this.activateBurger()
  }
}
