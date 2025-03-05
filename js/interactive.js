const button1 = document.getElementById('button1')

function getRandomNumb(maxnumb) {
    return Math.floor(Math.random() * maxnumb);
}

button1.addEventListener('click', () => {
    button1.classList.toggle('active')
    setTimeout(() => {
        button1.classList.toggle('active')
      }, 125)
    console.log(getRandomNumb(10))
})
