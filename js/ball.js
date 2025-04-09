const ball = document.createElement('div')
document.body.appendChild(ball)
const LPaddle = document.createElement('div')
document.body.appendChild(LPaddle)
const scoreholder = document.createElement('p')
document.body.appendChild(scoreholder)
const levelholder = document.createElement('p')
document.body.appendChild(levelholder)
const gameover = document.createElement('div')
document.body.appendChild(gameover)
const gameovertext = document.createElement('p')
gameover.appendChild(gameovertext)
let LPaddleWidth = 15
let LPaddleHeight = 170
const ballRadius = 30
const windowHeight = window.innerHeight
const windowWidth = window.innerWidth
let ballXPosition = windowWidth / 2 - ballRadius
let ballSpeed = 7.5
let ballXDirection = 1
let ballYPosition = windowHeight / 2 - ballRadius
let ballYDirection = 1
let LPaddleYPosition = windowHeight / 2 - LPaddleHeight / 2
let LPaddleSpeed = 10
let LPaddleXPosition = 70
let running = true

document.body.style.alignItems = "center"
document.body.style.justifyContent = "center"

let score = 0 // display score and increase score by 1 every time the ball hits the paddle
let level = 1 // display level and increase the level by 1 every time the score increases by 10
// as the levels increase, increase the ball speed
// if the ball gets past your paddle, end the game
// make the ball stop/disappear and then let the user know the game is over
// optional: sound fx, background music


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

    if (ballXPosition < 0){
        running = false
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
    if (
        (ballBottom >= LPaddleTop) &&
        (ballTop <= LPaddleBottom) &&
        (ballLeft <= LPaddleRight) &&
        (ballXDirection == -1)
    ) {
        score += 5
        scoreholder.innerHTML = `Score: ${score}`
        if (score % 10 == 0) {
            changeLevel()
        }
        ballXDirection = ballXDirection * -1
    }
}


createBall()
createLPaddle()
createDescription()

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

function createDescription() {
    scoreholder.style.position = "absolute"
    scoreholder.style.fontSize = "30px"
    scoreholder.style.margin = "10px"
    scoreholder.style.top = "0px"
    scoreholder.style.right = "50px"
    scoreholder.style.fontFamily = "Verdana,sans-serif"
    scoreholder.innerHTML = `Score: ${score}`

    levelholder.style.position = "absolute"
    levelholder.style.fontSize = "30px"
    levelholder.style.margin = "10px"
    levelholder.style.top = "50px"
    levelholder.style.right = "50px"
    levelholder.style.fontFamily = "Verdana,sans-serif"
    levelholder.innerHTML = `Level: ${level}`
}

function createGameover() {
    gameover.style.position = "relative"
    gameover.style.fontSize = "30px"
    gameover.style.margin = "10px"
    gameover.style.top = "25px"
    gameover.style.left = "0px"
    gameover.style.width = windowWidth
    gameover.style.height = windowHeight
    gameover.style.display = "flex"
    gameover.style.alignItems = "center"
    gameover.style.justifyContent = "center"
    gameover.style.backgroundColor = "grey"
    gameovertext.style.fontFamily = "Verdana,sans-serif"
    gameovertext.innerHTML = `Game over! <br> you had a score of ${score} <br> you made it to level ${level}`
}

function changeLevel() {
    level += 1
    levelholder.innerHTML = `Level: ${level}`
    ballSpeed += 1
    if (level % 2 == 1) {
        LPaddleHeight -= 10
        LPaddleSpeed += 1
        LPaddle.style.height = `${LPaddleHeight}px`
    }
}

wKey = false
sKey = false

document.addEventListener('keydown', (event) => {
    if (event.key == 'w') {
        wKey = true
    }
    if (event.key == 's') {
        sKey = true
    }
})

document.addEventListener('keyup', (event) => {
    if (event.key == 'w')
    {
        wKey = false
    }
    if (event.key == 's') {
        sKey = false
    }
})

function moveLPaddle() {
    if (wKey == true && LPaddleYPosition > 0) {
        LPaddleYPosition = LPaddleYPosition - LPaddleSpeed
    }
    if (sKey == true && LPaddleYPosition < windowHeight - LPaddleHeight) {
        LPaddleYPosition = LPaddleYPosition + LPaddleSpeed
    }

    LPaddle.style.top = `${LPaddleYPosition}px`
}

function animate() {
    if (running == true) {
        moveBall()
        moveLPaddle()
        requestAnimationFrame(animate)
    }
    else if (running == false) {
        createGameover()
    }
}
animate()

