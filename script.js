function addChar(char) {
    const str = document.querySelector('.calc-str');

    if (char === 'C') {
        str.textContent = 0;
        result.textContent = '';
        calculet = 0;
    }

    else if (+str.textContent === 0) {
        str.textContent = char;
    }
    else {
        str.textContent += char;
    }
}

function calc(operator) {
    let temp = 0;
    result.textContent += calcStr.textContent;
    if (operator == '+') {
        temp = calculet + +calcStr.textContent;
        result.textContent += ` ${equals.textContent}  ${temp}`;
    } else if (operator == '-') {
        temp = calculet - +calcStr.textContent;
        result.textContent += ` ${equals.textContent}  ${temp}`;
    } else if (operator == '×') {
        temp = calculet * +calcStr.textContent;
        result.textContent += ` ${equals.textContent}  ${temp}`;
    } else if (operator == '÷') {
        if (calculet === 0 || calcStr.textContent == '0') {
            result.textContent += ` ${equals.textContent} 0`
        } else {
            temp = calculet / +calcStr.textContent;
            result.textContent += ` ${equals.textContent}  ${temp}`;
        }
    }
}

const calcStr = document.querySelector(".calc-str");
const result = document.querySelector(".result");
const divid = document.querySelector('.divid');
const multiply = document.querySelector('.multiply');
const minus = document.querySelector('.minus');
const plus = document.querySelector('.plus');
const equals = document.querySelector('.equals');
// const dot = document.querySelector('.dot');
const resetB = document.querySelectorAll('.reset');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const zero = document.querySelector('.zero');
let operator = '';
let calculet = 0;

resetB[0].addEventListener('click', () => { addChar(resetB[0].textContent) });
resetB[1].addEventListener('click', () => { addChar(resetB[1].textContent) });
one.addEventListener('click', () => { addChar(one.textContent) });
two.addEventListener('click', () => { addChar(two.textContent) });
three.addEventListener('click', () => { addChar(three.textContent) });
four.addEventListener('click', () => { addChar(four.textContent) });
five.addEventListener('click', () => { addChar(five.textContent) });
six.addEventListener('click', () => { addChar(six.textContent) });
seven.addEventListener('click', () => { addChar(seven.textContent) });
eight.addEventListener('click', () => { addChar(eight.textContent) });
nine.addEventListener('click', () => { addChar(nine.textContent) });
zero.addEventListener('click', () => { addChar(zero.textContent) });
// dot.addEventListener('click', () => { addChar(dot.textContent) });
plus.addEventListener('click', () => {
    operator = '+';
    calculet += +calcStr.textContent;
    result.textContent = calcStr.textContent + operator;
    calcStr.textContent = '0';
});
minus.addEventListener('click', () => {
    operator = '-';
    calculet += +calcStr.textContent;
    result.textContent = calcStr.textContent + operator;
    calcStr.textContent = '0';
});
multiply.addEventListener('click', () => {
    operator = '×';
    calculet += +calcStr.textContent;
    result.textContent = calcStr.textContent + operator;
    calcStr.textContent = '0';
});
divid.addEventListener('click', () => {
    operator = '÷';
    calculet += +calcStr.textContent;
    result.textContent = calcStr.textContent + operator;
    calcStr.textContent = '0';
})


equals.addEventListener('click', () => {
    calc(operator);
    calculet = 0;
});

// slider block

const left = document.querySelector('.left');
const right = document.querySelector('.right');
const slids = document.querySelector('.slids');
const imgSlid = document.querySelectorAll('.img-slid');

let currentSlideIndex = 0;
const slidsWidth = slids.clientWidth;

function showSlide() {
    slids.style.transform = `translateX(-${currentSlideIndex * slidsWidth}px)`;
}

function nextSlide() {
    let newSlideIndex = currentSlideIndex + 1;
    if (newSlideIndex > imgSlid.length - 1) {
        newSlideIndex = 0;
    }
    currentSlideIndex = slideIndex;
    showSlide();
}

function previousSlide() {
    let newSlideIndex = currentSlideIndex - 1;
    if (newSlideIndex < 0) {
        newSlideIndex = imgSlid.length - 1;
    }
    currentSlideIndex = newSlideIndex;
    showSlide();
}

left.addEventListener('click', nextSlide);
right.addEventListener('click', previousSlide)