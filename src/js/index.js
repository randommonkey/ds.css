import '../sass/ds.scss'
import Banner from '@/components/Banner'
import Box from '@/components/Box'
import Search from '@/components/Search'
import SplittedText from '@/components/SplittedText'
import Text from '@/components/Text'

const banners = Array.from(document.querySelectorAll('[id^=banner]'))
banners.forEach(banner => new Banner(banner).buildDOM())

const boxes = Array.from(document.querySelectorAll('[id^=boxes]'))
boxes.forEach(box => new Box(box).buildDOM())

const searchs = Array.from(document.querySelectorAll('[id^=search]'))
searchs.forEach(s => new Search(s).buildDOM())

const splittedTexts = Array.from(document.querySelectorAll('[id^=splitted]'))
splittedTexts.forEach(sT => new SplittedText(sT).buildDOM())

const texts = Array.from(document.querySelectorAll('[id^=text]'))
texts.forEach(t => new Text(t).buildDOM())
