const car = document.querySelector('.car')

setInterval(car1move, 100)

const carspeed1 = 10
constcar1pos = 410;

function car1move() {
    setTimeout( () => {
        constcar1pos += 10
        console.log(constcar1pos)
        //console.log(car.style.left += `${constcar1pos}px`)
        car.style.left = `${constcar1pos}px`
     }, 10)

}
