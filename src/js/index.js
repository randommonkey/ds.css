import '../sass/ds.scss'

// Components
import Banner from '@/components/Banner'
import Box from '@/components/Box'
import Carousel from '@/components/Carousel'
import Iframe from '@/components/Iframe'
import Nav from '@/components/Nav'
import Overlay from '@/components/Overlay'
import Search from '@/components/Search'
import SplittedText from '@/components/SplittedText'
import Text from '@/components/Text'

// Utilities
import Utilities from 'Utilities'
import overlayHandler from 'Utilities/overlay'

// Third party libs
import merge from 'deepmerge'
const WebFont = require('webfontloader')

const defaults = {
  fonts: {
    title: {
      fallback: 'sans-serif',
      family: 'Open Sans'
    },
    body: {
      fallback: 'serif',
      family: 'Prata'
    }
  },
  nav: {
    mode: 'fixed', // static
    links: [
      { label: 'Inicio', href: 'index' },
      { label: 'Contacto', href: 'contact' }
    ],
    logo: {
      image: 'https://www.datasketch.co/images/ds-horizontal-pink.png',
      href: 'https://www.datasketch.co/es'
    }
  }
}

function initializeComponent (component, id) {
  /* eslint new-cap: off */
  Array.from(document.querySelectorAll(`[id^=${id}]`))
    .filter(element => element.classList.contains('level1'))
    .forEach(element => new component(element).buildDOM())
}

function injectCSS (css) {
  const head = document.head || document.querySelector('head')
  const style = document.createElement('style')
  style.appendChild(document.createTextNode(css))
  head.appendChild(style)
}

window.titiInstance = null

window.titi = function titi (opts = {}) {
  if (!window.titiInstance) {
    window.titiInstance = true
    const config = merge(defaults, opts)

    // Load fonts
    const { fonts } = config
    WebFont.load({
      google: {
        families: [fonts.title.family, fonts.body.family]
      }
    })

    // Build css
    const css = `
      body {
        font-family: "${fonts.body.family}", ${fonts.body.fallback};
      }
      h1, h2, h3, h4, h5, h6 {
        font-family: "${fonts.title.family}", ${fonts.title.fallback};
      }
    `
    // Inject generated css in head
    injectCSS(css)

    // Build nav
    new Nav(config.nav).buildDOM()

    // Apply text color
    Array.from(document.body.getElementsByTagName('*')).forEach(element => new Utilities(element))

    // Initialize components
    initializeComponent(Banner, 'banner')
    initializeComponent(Box, 'boxes')
    initializeComponent(Carousel, 'carousel')
    initializeComponent(Iframe, 'iframe')
    initializeComponent(Search, 'search')
    initializeComponent(SplittedText, 'splitted')
    initializeComponent(Text, 'text')

    // Initialize overlay
    new Overlay(document.querySelector('#overlays')).buildDOM()
    overlayHandler()
    return
  }
  throw new Error('Instance of titi already called')
}
