'use strict'

function onBallClick(elBall, maxDiameter) {
    var ballRadius = +elBall.innerText + getRandomIntInclusive(20, 60)
    if (ballRadius > maxDiameter) ballRadius = 100
    elBall.style.width = ballRadius + 'px'
    elBall.style.height = ballRadius + 'px'
    elBall.innerText = ballRadius
    elBall.style.backgroundColor = getRandomColor()
}