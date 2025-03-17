const nav = document.querySelector('.nav')

window.addEventListener('scroll', () => {
    if (window.scrollY > 260){
        nav.classList.add('active')
    }
    else nav.classList.remove('active')
})
