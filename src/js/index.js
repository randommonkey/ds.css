import 'swiper/dist/css/swiper.min.css'
import 'highlight.js/styles/monokai.css'
import '../sass/titi.scss'
import '../js/components/boxes'
import '../js/components/iframe'
import '../js/components/nav'
import '../js/components/slider'
import hljs from 'highlight.js/lib/highlight'
import bash from 'highlight.js/lib/languages/bash'
import javascript from 'highlight.js/lib/languages/javascript'
import nginx from 'highlight.js/lib/languages/nginx'
import r from 'highlight.js/lib/languages/r'

hljs.registerLanguage('bash', bash)
hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('nginx', nginx)
hljs.registerLanguage('r', r)
hljs.initHighlightingOnLoad()
