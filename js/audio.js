let shakeItOff = new Audio('../assets/shake-it-off.mp3')
let darkNight = new Audio('../assets/dark-night.mp3')
let daylight = new Audio('../assets/daylight.mp3')
let noNiceThings = new Audio('../assets/no-nice-things.mp3')

function playShakeItOff() {
  shakeItOff.volume = 0.25
  shakeItOff.play()
}

function playDarkNight() {
  darkNight.volume = 0.25
  darkNight.play()
}

function playDaylight() {
  daylight.volume = 0.25
  daylight.play()
}

function playNoNiceThings() {
  noNiceThings.volume = 0.25
  noNiceThings.play()
}


export {
  playShakeItOff,
  playDarkNight,
  playDaylight,
  playNoNiceThings,
}