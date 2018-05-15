export default function overlayHandler () {
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
