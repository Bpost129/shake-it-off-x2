import { getRandomQuote } from "../data/quotes.js"
import * as taylorAudio from './audio.js'

const quoteBtn = document.querySelector('#quote-button')
const cardContainer = document.querySelector('#card-container')

quoteBtn.addEventListener('click', () => {
  taylorAudio.playShakeItOff()
  console.log(getRandomQuote())
})