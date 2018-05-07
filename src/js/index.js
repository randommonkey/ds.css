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

  let banners = Array.from(document.querySelectorAll('[id^=banner]'))
  banners = banners.filter(banner => banner.classList.contains('level1'))
  banners.forEach(banner => new Banner(banner).buildDOM())

  let boxes = Array.from(document.querySelectorAll('[id^=boxes]'))
  boxes = boxes.filter(box => box.classList.contains('level1'))
  boxes.forEach(box => new Box(box).buildDOM())

  let carousels = Array.from(document.querySelectorAll('[id^=carousel]'))
  carousels = carousels.filter(carousel => carousel.classList.contains('level1'))
  carousels.forEach(carousel => new Carousel(carousel).buildDOM())

  let iframes = Array.from(document.querySelectorAll('[id^=iframe]'))
  iframes = iframes.filter(iframe => iframe.classList.contains('level1'))
  iframes.forEach(iframe => new Iframe(iframe).buildDOM())

  new Overlay(document.querySelector('#overlays')).buildDOM()

  let searchs = Array.from(document.querySelectorAll('[id^=search]'))
  searchs = searchs.filter(search => search.classList.contains('level1'))
  searchs.forEach(s => new Search(s).buildDOM())

  let splittedTexts = Array.from(document.querySelectorAll('[id^=splitted]'))
  splittedTexts = splittedTexts.filter(splitted => splitted.classList.contains('level1'))
  splittedTexts.forEach(sT => new SplittedText(sT).buildDOM())

  let texts = Array.from(document.querySelectorAll('[id^=text]'))
  texts = texts.filter(text => text.classList.contains('level1'))
  texts.forEach(t => new Text(t).buildDOM())
}
