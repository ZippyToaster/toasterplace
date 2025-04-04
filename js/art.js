const car = document.querySelector('.car')
const car2 = document.querySelector('.car2')
const car3 = document.querySelector('.car3')
const car4 = document.querySelector('.car4')

setInterval(car1move, 10)
setInterval(car2move, 10)
setInterval(car3move, 10)
setInterval(car4move, 10)

constcar1pos = 410;
constcar2pos = 160;
constcar3pos = 660;
constcar4pos = 910;

function car1move() {
    setTimeout( () => {
        constcar1pos += 2
        console.log(constcar1pos)
        //console.log(car.style.left += `${constcar1pos}px`)
        if (constcar1pos >= 1400) {
            constcar1pos = -200
            car.style.left = -200
        }
        car.style.left = `${constcar1pos}px`
     }, 10)

}

function car2move() {
    setTimeout( () => {
        constcar2pos += 1.5
        if (constcar2pos >= 1400) {
            constcar2pos = -200
            car2.style.left = -200
        }
        car2.style.left = `${constcar2pos}px`
     }, 10)

}

function car3move() {
    setTimeout( () => {
        constcar3pos += 2.5
        if (constcar3pos >= 1400) {
            constcar3pos = -200
            car3.style.left = -200
        }
        car3.style.left = `${constcar3pos}px`
     }, 10)

}

function car4move() {
    setTimeout( () => {
        constcar4pos += 4.2
        if (constcar4pos >= 1400) {
            constcar4pos = -200
            car4.style.left = -200
        }
        car4.style.left = `${constcar4pos}px`
     }, 10)

}
