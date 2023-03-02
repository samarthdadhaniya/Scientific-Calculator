const display = document.querySelector("#input_display");

// getting number by id------------------------------------

const zero = document.querySelector("#zero_Number");
const one = document.querySelector("#one_Number");
const two = document.querySelector("#two_Number");
const three = document.querySelector("#three_Number");
const four = document.querySelector("#four_Number");
const five = document.querySelector("#five_Number");
const six = document.querySelector("#six_Number");
const seven = document.querySelector("#seven_Number");
const eight = document.querySelector("#eight_Number");
const nine = document.querySelector("#nine_Number");
const dot = document.querySelector("#dot_operator");
// ---------------------------------------------------------

// getting basic operator select by id ----------------------------
const addition_Operator = document.querySelector('#addition_sign');
const subtraction_Operator = document.querySelector('#subtraction_sign');
const multiplication_Operator = document.querySelector('#multiplication_sign');
const division_Operator = document.querySelector('#division_sign');
const modulus_Operator = document.querySelector('#modulus_sign');
const equal_To = document.querySelector('#equalto_sign');
// -----------------------------------------------------------------

// Memory Function Seclecting with ID-------------------------
const MemoryClearBtn = document.querySelector("#MemoryClear")
const MemoryReadBtn = document.querySelector("#MemoryRead")
const MemoryPluseBtn = document.querySelector("#MemoryPluse")
const MemoryMinusBtn = document.querySelector("#MemoryMinus")
const MemoryStoreBtn = document.querySelector("#MemoryStore")
// ------------------------------------------------------------

// all common function select with id------------------------
const floorbtn = document.querySelector("#floor");
const ceilbtn = document.querySelector("#ceil");
const randombtn = document.querySelector("#random");
const clearScreen = document.querySelector('#clear');
const backEraseButton = document.querySelector('#backEraseButton');
const logbtn = document.querySelector('#logbtn');
const lnbtn = document.querySelector('#lnbtn');
const xsqurebtn = document.querySelector('#xsqurebtn');
const squarerootbtn = document.querySelector('#squareroot');
const tenpowerxbtn = document.querySelector('#tenpowerx');
const oneuponxbtn = document.querySelector('#oneuponx');
const modxbtn = document.querySelector('#modx');
const expbtn = document.querySelector('#exp');
const fectorialbtn = document.querySelector('#fectorial');
const pibtn = document.querySelector('#pi');
const constantEbtn = document.querySelector('#constantE');
const degreebtn = document.querySelector('#degree')
const radianbtn = document.querySelector('#radian')
const FEbtn = document.querySelector('#FE')
const leftParenthesisbtn = document.querySelector('#leftParenthesis')
const rightParenthesisbtn = document.querySelector('#rightParenthesis')
const exponentbtn = document.querySelector('#exponent')
const xcudebtn = document.querySelector('#xcube');
const cuberootbtn = document.querySelector('#cuberoot')
const expmonebtn = document.querySelector('#expmone');
const tworestooxbtn = document.querySelector('#tworestoox');
const logonepbtn = document.querySelector('#logonep');
const eraisedtooxbtn = document.querySelector('#eraisedtoox');

const sinbtn = document.querySelector('#sin');
const secbtn = document.querySelector('#sec');
const cosbtn = document.querySelector('#cos');
const cscbtn = document.querySelector('#csc');
const tanbtn = document.querySelector('#tan');
const cotbtn = document.querySelector('#cot');

// ------------

let tempSpanVariable;
let displayArray = [];  // Final Result Store Here
let characterCounter = 0; // Calculate Total Charactor of Given String By User
let degrad = 1; // For Degree To Radian Button
let fe = 0;  // For 'FE' Button
let memoryArray = []; // To store Memory Data


function appendNumber(number) {
    // create span container function
    tempSpanVariable = document.createElement('span');
    tempSpanVariable.textContent = number;
    displayArray.push(tempSpanVariable);
    display.append(tempSpanVariable);
}

// EventListener for Each number button

zero.addEventListener("click", () => {
    if (characterCounter < 23) {
        characterCounter++;
        appendNumber('0');
    }
})

one.addEventListener("click", () => {
    if (characterCounter < 23) {
        characterCounter++;
        appendNumber('1');
    }
})

two.addEventListener("click", () => {
    if (characterCounter < 23) {
        characterCounter++;
        appendNumber('2');
    }
})

three.addEventListener("click", () => {
    if (characterCounter < 23) {
        characterCounter++;
        appendNumber('3');
    }
})

four.addEventListener("click", () => {
    if (characterCounter < 23) {
        characterCounter++;
        appendNumber('4');
    }
})

five.addEventListener("click", () => {
    if (characterCounter < 23) {
        characterCounter++;
        appendNumber('5');
    }
})

six.addEventListener("click", () => {
    if (characterCounter < 23) {
        characterCounter++;
        appendNumber('6');
    }
})

seven.addEventListener("click", () => {
    if (characterCounter < 23) {
        characterCounter++;
        appendNumber('7');
    }
})

eight.addEventListener("click", () => {
    if (characterCounter < 23) {
        characterCounter++;
        appendNumber('8');
    }
})

nine.addEventListener("click", () => {
    if (characterCounter < 23) {
        characterCounter++;
        appendNumber('9');
    }
})

dot.addEventListener("click", () => {
    if (characterCounter < 23) {
        characterCounter++;
        appendNumber('.');
    }
})


// EventListener for Operator button

addition_Operator.addEventListener("click", () => {
    if (characterCounter < 23) {
        characterCounter++;
        appendNumber('+');
    }
})

subtraction_Operator.addEventListener("click", () => {
    if (characterCounter < 23) {
        characterCounter++;
        appendNumber('-');
    }
})

multiplication_Operator.addEventListener("click", () => {
    if (characterCounter < 23) {
        characterCounter++;
        appendNumber('*');
    }
})

division_Operator.addEventListener("click", () => {
    if (characterCounter < 23) {
        characterCounter++;
        appendNumber('/');
    }
})

modulus_Operator.addEventListener("click", () => {
    if (characterCounter < 23) {
        characterCounter++;
        appendNumber('%');
    }
})

constantEbtn.addEventListener("click", () => {
    if (characterCounter < 1) {
        characterCounter++
        appendNumber(2.718281828459045)
    }
})

pibtn.addEventListener("click", () => {
    if (characterCounter < 23) {
        characterCounter++;
        appendNumber('3.14');
    }
})

leftParenthesisbtn.addEventListener("click", () => {
    if (characterCounter < 23) {
        characterCounter++;
        appendNumber('(');
    }
})

rightParenthesisbtn.addEventListener("click", () => {
    if (characterCounter < 23) {
        characterCounter++;
        appendNumber(')');
    }
})

exponentbtn.addEventListener("click", () => {
    if (characterCounter < 23) {
        characterCounter++;
        appendNumber('**');
    }
})