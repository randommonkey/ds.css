import { iframeResizer } from 'iframe-resizer'

const iframes = [...document.querySelectorAll('iframe')]

if (iframes) {
  for (const iframe of iframes) {
    if (iframe.hasAttribute('data-resize')) {
      iframeResizer(iframe)
    }
  }
}
