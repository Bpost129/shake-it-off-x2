import { getRandomQuote } from "../data/quotes.js"
import * as taylorAudio from './audio.js'

const quotes = []

const body = document.querySelector('body')
const lightDarkBtn = document.querySelector('#light-dark-button')
const quoteBtn = document.querySelector('#quote-button')
const cardContainer = document.querySelector('#card-container')


quoteBtn.addEventListener('click', createQuote)
cardContainer.addEventListener('click', deleteQuote)

function createQuote() {
  taylorAudio.playShakeItOff()
  const newQuote = getRandomQuote()
  quotes.push(newQuote)
  render()
}

function render() {
  cardContainer.innerHTML = ''
  quotes.forEach((quote, idx) => {
    appendQuote(quote, idx)
  })
}

function appendQuote(quote, idx) {
  let quoteCard = document.createElement('div')
  quoteCard.className = `card ${quote.isTaylor ? 'taylor' : 'hater'}`
  quoteCard.innerHTML = 
  `<div>
    <p>${quote.text}</p>
    <p>${quote.isTaylor ? '-- T Swift' : '-- Hater Tot'}</p>
  </div>
  <footer>
    <button class='delete-btn' id='delete-btn-${idx}'>X</button>
  </footer>`
  cardContainer.appendChild(quoteCard)
}

function deleteQuote(e) {
  if(e.target.className = 'delete-btn') {
    const idx = e.target.id.replace('delete-btn-', '')
    quotes.splice(idx, 1)
    taylorAudio.playNoNiceThings()
    render()
  }
}

function toggleLightDark() {
  body.className = body.className === 'dark' ? '' : 'dark'
  if (body.className === 'dark') {
    taylorAudio.playDarkNight()
  } else {
    taylorAudio.playDaylight()
  }
}