// Seleção e criação de elementos
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

const stripes = document.createElement('div');
stripes.classList.add('stripes');
interface.appendChild(stripes);

const bigLine = document.createElement('div');
bigLine.classList.add('big-line');

for (let lines = 0; lines < 10; lines++) {
    const line = document.createElement('div');
    line.classList.add('line');
    
    stripes.appendChild(line);
}

// Controles do carro
let marginLeft = 0;
document.addEventListener('keydown', (event) => {

    if (marginLeft > -200 && event.key === 'a' || event.key === 'A') {
        marginLeft -= 200;
        car.classList.add('car-left');
        setTimeout(() => {
            car.classList.remove('car-left');
        }, 300);
    }
    else if (marginLeft < 200 && event.key === 'd' || event.key === 'D') {
        marginLeft += 200;
        car.classList.add('car-right');
        setTimeout(() => {
            car.classList.remove('car-right');
        }, 300);
    } else {
        null
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

// Aceleração
stripes.style.animation = 'none';
let teclaPressionada = false;

const ocultar = () => {
    stripes.style.animation = '';
}

const mostrar = () => {
    stripes.style.animation = 'none';
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'w') {
        teclaPressionada = true;
        ocultar();
    }
});
document.addEventListener('keyup', (event) => {
    if (event.key === 'w') {
        teclaPressionada = false;
        mostrar();
    }
});


