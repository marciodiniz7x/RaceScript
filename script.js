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

const marginLeftMin = -200;
const marginLeftMax = 200;
let marginLeft = 0;

document.addEventListener('keydown', (event) => {
    
    if (marginLeft > -200 && event.key === 'a' || event.key === 'A') {
        marginLeft -= 200;
    }
    else if (marginLeft < 200 && event.key === 'd' || event.key === 'D') {
        marginLeft += 200;
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


