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

    const height1 = getComputedStyle(elBall1).getPropertyValue('height')
    const height2 = getComputedStyle(elBall2).getPropertyValue('height')
    
    const width1 = getComputedStyle(elBall1).getPropertyValue('width')
    const width2 = getComputedStyle(elBall2).getPropertyValue('width')
    
    elBall1.style.width = width2
    elBall1.style.height = height2
    elBall1.style.backgroundColor = color2
  
    elBall2.style.width = width1
    elBall2.style.height = height1
    elBall2.style.backgroundColor = color1
}