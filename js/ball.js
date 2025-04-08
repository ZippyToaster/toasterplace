const ball = document.createElement('div')
document.body.appendChild(ball)
const LPaddle = document.createElement('div')
document.body.appendChild(LPaddle)
let LPaddleWidth = 15
let LPaddleHeight = 150
const ballRadius = 30
const windowHeight = window.innerHeight
const windowWidth = window.innerWidth
let ballXPosition = windowWidth / 2 - ballRadius
let ballSpeed = 5
let ballXDirection = 1
let ballYPosition = windowHeight / 2 - ballRadius
let ballYDirection = 1
let LPaddleYPosition = windowHeight / 2 - LPaddleHeight / 2
let LPaddleSpeed = 50
let LPaddleXPosition = 70

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

    // if top of the ball is less than or equal to the top of the paddle and the bottom
    // of the ball is greater than or equal to the bottom of the paddle and the left
    // side of the ball is less than or equal to the right side of the paddle, then
    // change ball direction
    let ballTop = ballYPosition
    let ballBottom = ballYPosition + 2 * ballRadius
    let ballLeft = ballXPosition
    let LPaddleTop = LPaddleYPosition
    let LPaddleBottom = LPaddleYPosition + LPaddleHeight
    let LPaddleRight = LPaddleXPosition + LPaddleWidth
    if (ball.style.left <= LPaddle.style.left) {
        console.log(ball.style.left)
        console.log(LPaddle.style.left)
        console.log(ball.style.top)
        console.log(LPaddle.style.top)
        ballXDirection = ballXDirection * -1
        ballYDirection = ballYDirection * -1
    }
}


createBall()
createLPaddle()

function createBall() {
    ball.style.height = `${2 * ballRadius}px`
    ball.style.width = `${2 * ballRadius}px`
    ball.style.borderRadius = "50%"
    ball.style.backgroundColor = "red"
    ball.style.position = "absolute"
    ball.style.top = `${windowHeight / 2 - ballRadius}px`
    ball.style.left = `${windowWidth / 2 - ballRadius}px`
}

function createLPaddle() {
    LPaddle.style.height = `${LPaddleHeight}px`
    LPaddle.style.width = `${LPaddleWidth}px`
    LPaddle.style.backgroundColor = 'blue'
    LPaddle.style.position = 'absolute'
    LPaddle.style.left = "70px"
    LPaddle.style.top = `${windowHeight / 2 - LPaddleHeight / 2}px`
}

document.addEventListener('keyup', (event) => {
    if (event.key == 'w') {
        if (LPaddleYPosition <= 0) {
            LPaddleYPosition = 0
        }
        else {
            LPaddleYPosition -= LPaddleSpeed
        }
    }

    if (event.key == 's') {
        if (LPaddleYPosition >= windowHeight - LPaddleHeight) {
            LPaddleYPosition = windowHeight - LPaddleHeight
        }
        else {
            LPaddleYPosition += LPaddleSpeed
        }
    }
    LPaddle.style.top = `${LPaddleYPosition}px`
})


