const car = document.getElementById('car')

setInterval(car1move, 100)

const carspeed1 = 100

function car1move() {
    setTimeout( () => {
        car.style.left += `${carspeed1}px`
     }, 100)

}
