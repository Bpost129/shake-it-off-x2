import { getRandomQuote } from "../data/quotes.js"
import * as taylorAudio from './audio.js'

const quotes = []

const quoteBtn = document.querySelector('#quote-button')
const cardContainer = document.querySelector('#card-container')

quoteBtn.addEventListener('click', createQuote)

function createQuote() {
  taylorAudio.playShakeItOff()
  const newQuote = getRandomQuote()
  quotes.push(newQuote)
}