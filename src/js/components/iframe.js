import { iframeResizer } from 'iframe-resizer'

const iframes = [...document.querySelectorAll('iframe')]

if (iframes) {
  for (const iframe of iframes) {
    const { resize } = iframe.dataset
    if (resize && resize === 'true') {
      iframeResizer(iframe)
    }
  }
}
