const container = document.querySelector('.container')
const panel = document.querySelector('.panel')
const arrow = document.getElementById('arrowbtn')
const arrowimg = document.getElementById('arrowimg')
const links = document.querySelectorAll('.link')
const title = document.querySelector('.title')
const description = document.querySelector('.description')

arrow.addEventListener('click', () => {
    panel.classList.toggle('active')
    container.classList.toggle('active')
    arrow.classList.toggle('active')
    title.classList.toggle('active')
    description.classList.toggle('active')
    links.forEach(link => {
        link.classList.toggle('active')
    })
})

