import '../sass/ds.scss'

// Components
import Banner from '@/components/Banner'
import Box from '@/components/Box'
import Carousel from '@/components/Carousel'
import Iframe from '@/components/Iframe'
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

const defaultOpts = {
  fonts: {
    title: {
      fallback: 'sans-serif',
      family: 'Open Sans',
      size: 20
    },
    body: {
      fallback: 'serif',
      family: 'Prata',
      size: 16
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

window.titi = function titi (opts = {}) {
  const config = merge(defaultOpts, opts)

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
}
