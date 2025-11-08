import './normalize.css'
import './style.css'
import { backAnim } from './backgr-anim.js'
import { sectionsAnim } from './sections-anim.js'
import { menuPopup } from './menu-popup.js'

backAnim(document.querySelector('#app'))
sectionsAnim(document.querySelector('#app'))
menuPopup(document.querySelector('#app'))
