'use strict'
var gTimeInterval
var gTimeOut
var gCounter = 0


function onBallClick(elBall, maxDiameter = 600) {
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

function onFifthBallClick() {
    document.body.style.backgroundColor = getRandomColor()
}

function onSixthBallClick() {
    const elBall1 = document.querySelector('.ball1')
    const elBall2 = document.querySelector('.ball2')

    elBall1.style.width = ''
    elBall1.style.height = ''
    elBall1.style.backgroundColor = ''
    elBall1.innerText = 100

    elBall2.style.width = ''
    elBall2.style.height = ''
    elBall2.style.backgroundColor = ''
    elBall2.innerText = 100

    document.body.style.backgroundColor = ''
}

function onSixthHover() {
    gTimeOut = setTimeout(() => {
        gTimeInterval = setInterval(runClickHandlers, 2000)
    }, 2000);
    // console.log('Hiiiiiii');
}

function onSixthHoverEnd() {
    clearInterval(gTimeInterval)
    clearTimeout(gTimeOut)
}

function runClickHandlers() {
    onBallClick(document.querySelector('.ball1'))
    onBallClick(document.querySelector('.ball2'))
    onThirdBallClick()
    onFourthBallClick()
    gCounter++
    // console.log('gCounter:	', gCounter)
    if (gCounter === 10) onSixthHoverEnd()
}