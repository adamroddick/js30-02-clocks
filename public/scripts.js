var secondHand = 0
var minuteHand = 0
var hourHand = 0
var elem = document.querySelector('#second')

function rotateSecond(increment) {
    let elem = document.querySelector('#second')
    secondHand = increment
    elem.setAttribute('transform',`rotate(${secondHand} 100 100)`)
}

function rotateMinute(increment) {
    let elem = document.querySelector('#minute')
    minuteHand = increment
    elem.setAttribute('transform',`rotate(${minuteHand} 100 100)`)
}

function rotateHour(increment) {
    let elem = document.querySelector('#hour')
    hourHand = increment
    elem.setAttribute('transform',`rotate(${hourHand} 100 100)`)
}

function rotateStick() {
    let elem = document.querySelector('#second')
    console.log(elem)
    second = new Date().getSeconds() * 6
    console.log(second)
    elem.style.transform = `rotate(${second}deg, 100, 100)`
}

window.setInterval(function() {
    rotateSecond((new Date().getSeconds()) * 6) 
    rotateMinute((new Date().getMinutes()) * 6)
    rotateHour((new Date().getHours()) * 30)
}, 1000)
