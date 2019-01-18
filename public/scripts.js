var stickRotation = 30

function rotateStick() {
    let div = document.querySelector('#stick')
    div.style.transform = `rotate(${stickRotation}deg)`
    stickRotation += 30
}