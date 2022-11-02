// Libraries
import fancybox from './lib/fancybox'
import sliderSwiper from './lib/slider-swiper'

// Scripts
import anchorTransition from './ts/data-href'
import scrolled from './ts/scrolled'
import waved from './ts/waved'
import maskTel from './ts/mask-tel'
import inputs from './ts/inputs'
import formValidate from './ts/form-validate'
import scrollHeader from './ts/scroll-header'
import mobileMenu from './ts/mobile-menu'
import filter from './ts/filter'
import player from './ts/player'
import listing from './ts/listing'

// Style
import './scss/index.scss'

// Connection
window.addEventListener('DOMContentLoaded', () => {

    fancybox.init()
    sliderSwiper.init()
    anchorTransition.init()
    scrolled.init()
    waved.init()
    maskTel.init()
    inputs.init()
    formValidate.init()
    scrollHeader.init()
    mobileMenu.init()
    filter.init()
    player.init()
    listing.init()
    
})