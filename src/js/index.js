import '../sass/ds.scss'
import Banner from '@/components/Banner'
import Box from '@/components/Box'
import Carousel from '@/components/Carousel'
import Iframe from '@/components/Iframe'
import Overlay from '@/components/Overlay'
import Search from '@/components/Search'
import SplittedText from '@/components/SplittedText'
import Text from '@/components/Text'

window.onload = function () {
  const anchors = Array.from(document.querySelectorAll('a'))

  anchors.forEach(anchor => {
    const href = anchor.getAttribute('href')
    if (href.match(/(overlay_\w*)/)) {
      anchor.addEventListener('click', event => {
        event.preventDefault()
        const id = href.match(/(overlay_\w*)/)[0].split('_').pop()
        const overlay = document.getElementById(id)
        document.body.classList.add('no-scroll')
        const container = document.querySelector('.overlay-container')
        container.classList.add('above')
        container.style.top = `${window.scrollY}px`
        overlay.classList.toggle('overlay-opened')
      })
    }
  })

  const closer = Array.from(document.querySelectorAll('.overlay-close'))

  closer.forEach(close => {
    close.addEventListener('click', event => {
      event.preventDefault()
      document.body.classList.remove('no-scroll')
      document.querySelector('.overlay-opened').classList.remove('overlay-opened')
      const container = document.querySelector('.overlay-container')
      container.classList.remove('above')
    })
  })
}

const banners = Array.from(document.querySelectorAll('[id^=banner]'))
banners.forEach(banner => new Banner(banner).buildDOM())

const boxes = Array.from(document.querySelectorAll('[id^=boxes]'))
boxes.forEach(box => new Box(box).buildDOM())

const carousels = Array.from(document.querySelectorAll('[id^=carousel]'))
carousels.forEach(carousel => new Carousel(carousel).buildDOM())

const iframes = Array.from(document.querySelectorAll('[id^=iframe]'))
iframes.forEach(iframe => new Iframe(iframe).buildDOM())

new Overlay(document.querySelector('#overlays')).buildDOM()

const searchs = Array.from(document.querySelectorAll('[id^=search]'))
searchs.forEach(s => new Search(s).buildDOM())

const splittedTexts = Array.from(document.querySelectorAll('[id^=splitted]'))
splittedTexts.forEach(sT => new SplittedText(sT).buildDOM())

const texts = Array.from(document.querySelectorAll('[id^=text]'))
texts.forEach(t => new Text(t).buildDOM())
