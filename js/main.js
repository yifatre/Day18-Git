'use strict'

function onBallClick(elBall) {
    var ballRadius = +elBall.innerText + 50
    elBall.style.width = ballRadius + 'px'
    elBall.style.height = ballRadius  + 'px'
    elBall.innerText = ballRadius
}