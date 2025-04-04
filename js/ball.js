const ball = document.createElement('div')
const ballRadius = 30
const windowHeight = window.innerHeight
const windowWidth = window.innerWidth
let ballXPosition = windowWidth / 2 - ballRadius
let ballSpeed = 5
let ballXDirection = 1
let ballYPosition = windowHeight / 2 - ballRadius
let ballYDirection = 1

setInterval(moveBall, 10)

function moveBall() {
    ballXPosition += ballSpeed * ballXDirection
    ball.style.left = `${ballXPosition}px`
    if (ballXPosition < 0 || ballXPosition > windowWidth - (2 * ballRadius)) {
        ballXDirection = ballXDirection * -1
    }

    ballYPosition += ballSpeed * ballYDirection
    ball.style.top = `${ballYPosition}px`
    if (ballYPosition < 0 || ballYPosition > windowHeight - (2 * ballRadius)) {
        ballYDirection = ballYDirection * -1
    }
}


createBall()

function createBall() {
    document.body.appendChild(ball)
    ball.style.height = `${2 * ballRadius}px`
    ball.style.width = `${2 * ballRadius}px`
    ball.style.borderRadius = "50%"
    ball.style.backgroundColor = "red"
    ball.style.position = "absolute"
    ball.style.top = `${windowHeight / 2 - ballRadius}px`
    ball.style.left = `${windowWidth / 2 - ballRadius}px`
}

