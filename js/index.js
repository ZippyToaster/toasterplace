const container = document.querySelector('.container')
const panel = document.querySelector('.panel')

container.addEventListener('click', () => {
    removeActiveClasses()
    panel.classList.add('active')
    container.classList.add('active')
})

function removeActiveClasses(){
     panel.classList.remove('active')
     container.classList.remove('active')
}

