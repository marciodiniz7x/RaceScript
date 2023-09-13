const interface = document.querySelector('.interface');

const lSide = document.createElement('div');
lSide.classList.add('l-side');
interface.appendChild(lSide);

const car = document.createElement('div');
car.classList.add('car');

interface.appendChild(car);

const rSide = document.createElement('div');
rSide.classList.add('r-side');
interface.appendChild(rSide);


// Controles carro

let marginLeft = 0;

document.addEventListener('keydown', (event) => {

    if (marginLeft > -200 && event.key === 'a' || event.key === 'A') {
        marginLeft -= 200;
        car.classList.add('car-left');
        setTimeout(() => {
            car.classList.remove('car-left');
        }, 500);
    }
    else if (marginLeft < 200 && event.key === 'd' || event.key === 'D') {
        marginLeft += 200;
        car.classList.add('car-right');
        setTimeout(() => {
            car.classList.remove('car-right');
        }, 500);
    }

    switch (marginLeft) {
        case 0:
            car.style.marginLeft = 0;
            break;
    
        case -200:
            car.style.marginLeft = '-200px';
            break;
    
        case 200:
            car.style.marginLeft = '200px';
            break;
    
        default:
            break;
    }
    console.log(marginLeft);
      
});


