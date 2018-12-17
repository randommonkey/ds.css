const boxItems = [...document.querySelectorAll('.box')]
const boxes = [...document.querySelectorAll('.boxes')]

const setBoxItemClasses = item => {
  const boxesOnMobile = Number.parseInt(item.getAttribute('data-mobile')) || 0
  const boxesOnTablet = Number.parseInt(item.getAttribute('data-tablet')) || boxesOnMobile
  const boxesOnPc = Number.parseInt(item.getAttribute('data-pc')) || boxesOnTablet

  boxesOnMobile ? item.classList.add(`mobile-${boxesOnMobile}`) : item.classList.add('mobile')
  boxesOnTablet ? item.classList.add(`tablet-${boxesOnTablet}`) : item.classList.add('tablet')
  boxesOnPc ? item.classList.add(`pc-${boxesOnPc}`) : item.classList.add('pc')

  item.hasAttribute('data-mobile') && item.removeAttribute('data-mobile')
  item.hasAttribute('data-tablet') && item.removeAttribute('data-tablet')
  item.hasAttribute('data-pc') && item.removeAttribute('data-pc')
}

const setBoxClasses = box => {
  box.hasAttribute('data-justify') && box.classList.add(`justify-${box.getAttribute('data-justify')}`)
  box.hasAttribute('data-align') && box.classList.add(`align-to-${box.getAttribute('data-align')}`)
  box.hasAttribute('data-justify') && box.removeAttribute('data-justify')
  box.hasAttribute('data-align') && box.removeAttribute('data-align')
}

if (boxItems) {
  for (const boxItem of boxItems) {
    setBoxItemClasses(boxItem)
  }
}

if (boxes) {
  for (const box of boxes) {
    setBoxClasses(box)
  }
}
