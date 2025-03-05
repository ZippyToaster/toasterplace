const button1 = document.getElementById('button1')

function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}

button1.addEventListener('click', () => {
    button1.classList.toggle('active')
    console.log(getRandomNumber(10));
})
