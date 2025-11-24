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
  render()
}

function render() {
  cardContainer.innerHTML = ''
  quotes.forEach(quote => {
    appendQuote(quote)
  })
}

function appendQuote(quote) {
  let quoteCard = document.createElement('div')
  quoteCard.className = `card ${quote.isTaylor ? 'taylor' : 'hater'}`
  quoteCard.innerHTML = 
  `<div>
    <p>${quote.text}</p>
    <p>${quote.isTaylor ? '-- T Swift' : '-- Hater Tot'}</p>
  </div>`
  cardContainer.appendChild(quoteCard)
}