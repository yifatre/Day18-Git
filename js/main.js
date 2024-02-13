'use strict'

function onBallClick(elBall) {
    var ballRadius = +elBall.innerText + getRandomIntInclusive(20, 60)
    if (ballRadius > 400) ballRadius = 100
    elBall.style.width = ballRadius + 'px'
    elBall.style.height = ballRadius + 'px'
    elBall.innerText = ballRadius
    elBall.style.backgroundColor = getRandomColor()
}