'use strict'

function onBallClick(elBall, maxDiameter) {
    var ballRadius = +elBall.innerText + getRandomIntInclusive(20, 60)
    if (ballRadius > maxDiameter) ballRadius = 100
    elBall.style.width = ballRadius + 'px'
    elBall.style.height = ballRadius + 'px'
    elBall.innerText = ballRadius
    elBall.style.backgroundColor = getRandomColor()
}

function onThirdBallClick() {
    const elBall1 = document.querySelector('.ball1')
    const elBall2 = document.querySelector('.ball2')

    const color1 = getComputedStyle(elBall1).getPropertyValue('background-color')
    const color2 = getComputedStyle(elBall2).getPropertyValue('background-color')

    const radius1 = getComputedStyle(elBall1).getPropertyValue('height')
    const radius2 = getComputedStyle(elBall2).getPropertyValue('height')

    elBall1.style.width = radius2
    elBall1.style.height = radius2
    elBall1.style.backgroundColor = color2
    elBall1.innerText = radius2.slice(0, -2)

    elBall2.style.width = radius1
    elBall2.style.height = radius1
    elBall2.style.backgroundColor = color1
    elBall2.innerText = radius1.slice(0, -2)
}

function onFourthBallClick() {
    const elBall1 = document.querySelector('.ball1')
    const elBall2 = document.querySelector('.ball2')

    var radius1 = +elBall1.innerText - getRandomIntInclusive(20, 60)
    if (radius1 < 100) radius1 = 100
    elBall1.style.width = radius1 + 'px'
    elBall1.style.height = radius1 + 'px'
    elBall1.innerText = radius1
    
    var radius2 = +elBall1.innerText - getRandomIntInclusive(20, 60)
    if (radius2 < 100) radius2 = 100
    elBall2.style.width = radius2 + 'px'
    elBall2.style.height = radius2 + 'px'
    elBall2.innerText = radius2
}