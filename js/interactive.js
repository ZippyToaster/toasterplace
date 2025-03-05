const button1 = document.getElementById('button1')

function getRandomNumb(maxnumb) {
    return Math.floor(Math.random() * maxnumb);
}

let posX = 0;
let poxY = 0;

button1.addEventListener('click', () => {
    button1.classList.toggle('active')
    posX = getRandomNumb(1000)
    posY = getRandomNumb(500)
    button1.style.right = `${posX}px`
    button1.style.top = `${posY}px`
    setTimeout(() => {
        button1.classList.toggle('active')
    }, 125)
})
