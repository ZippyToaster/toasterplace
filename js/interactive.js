const button1 = document.getElementById('button1')

function getRandomNumb(maxnumb) {
    return Math.floor(Math.random() * maxnumb);
}

button1.addEventListener('click', () => {
    button1.classList.toggle('active')
    button1.style.top = `${getRandomNumb(500)}px`
    button1.style.right = `${getRandomNumb(500)}px`
    setTimeout(() => {
        button1.classList.toggle('active')
      }, 125)
    console.log(getRandomNumb(100))
})
