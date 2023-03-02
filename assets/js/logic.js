const display = document.querySelector("#input_display");

let second_button = 0;

document.getElementById('xcube').style.display = "none";
document.getElementById('cuberoot').style.display = "none";
document.getElementById('expmone').style.display = "none";
document.getElementById('tworestoox').style.display = "none";
document.getElementById('logonep').style.display = "none";
document.getElementById('eraisedtoox').style.display = "none";


function display_2nd() {
    if (second_button == 0) {
        document.getElementById('xcube').style.display = "block";
        document.getElementById('cuberoot').style.display = "block";
        document.getElementById('expmone').style.display = "block";
        document.getElementById('tworestoox').style.display = "block";
        document.getElementById('logonep').style.display = "block";
        document.getElementById('eraisedtoox').style.display = "block";

        document.getElementById('xsqurebtn').style.display = "none";
        document.getElementById('squareroot').style.display = "none";
        document.getElementById('exponent').style.display = "none";
        document.getElementById('tenpowerx').style.display = "none";
        document.getElementById('logbtn').style.display = "none";
        document.getElementById('lnbtn').style.display = "none";
        second_button = 1
    } else {
        document.getElementById('xsqurebtn').style.display = "block";
        document.getElementById('squareroot').style.display = "block";
        document.getElementById('exponent').style.display = "block";
        document.getElementById('tenpowerx').style.display = "block";
        document.getElementById('logbtn').style.display = "block";
        document.getElementById('lnbtn').style.display = "block";

        document.getElementById('xcube').style.display = "none";
        document.getElementById('cuberoot').style.display = "none";
        document.getElementById('expmone').style.display = "none";
        document.getElementById('tworestoox').style.display = "none";
        document.getElementById('logonep').style.display = "none";
        document.getElementById('eraisedtoox').style.display = "none";
        second_button = 0;
    }
}

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


function finalResult() {
    var input = display.textContent;

    // display.value = display.value.replaceAll("**", "^");

    var value = input;

    console.log(value);

    try{
        function calculate(inputExpression) {
            return new Function("return " + inputExpression)();
        }
        
        const result = calculate(value);
        console.log(result)
        
        display.innerHTML = result;
    }
    catch (error) {

        display.textContent = "Invalid Input!";

    setTimeout(() => {
        display.textContent = ""; 
        document.getElementById("input_display").value = "";
    }, 3000);
    }
}

// --------------------------------

// this function return exponential of given input number
expbtn.addEventListener("click", () => {
    display.textContent = Math.exp(display.textContent)
});


// this function is return cude value of given number
xcudebtn.addEventListener("click", () => {
    display.textContent = Math.pow(display.textContent, 3)
});


// this function will find cuberoot of given expration by user
cuberootbtn.addEventListener("click", () => {
    display.textContent = Math.cbrt(display.textContent)
});


// this is return e to the power x is an exponential function with a base equal to 'e'
eraisedtooxbtn.addEventListener("click", () => {
    display.textContent = Math.pow(2.718281828459045, display.textContent)
});


// this expm1() function will returns the value of Ex minus 1
expmonebtn.addEventListener("click", () => {
    display.textContent = Math.expm1(display.textContent)
});


// this function returns the natural logarithm (base E) of 1 + a number
logonepbtn.addEventListener("click", () => {
    display.textContent = Math.log1p(display.textContent)
});


// this function returns the value of 2 to the power of x:
tworestooxbtn.addEventListener("click", () => {
    display.textContent = Math.pow(2, display.textContent)
});

// ------------------------------

// this function returns rounds a number DOWN to the nearest integer:
floorbtn.addEventListener("click", () => {
    display.textContent = Math.floor(display.textContent)
});


// this function returns rounds a number Up to the nearest integer:
ceilbtn.addEventListener("click", () => {
    display.textContent = Math.ceil(display.textContent)
});


// FE_Button
FEbtn.addEventListener("click", () => {
    if (fe) {
        display.textContent = Number(display.textContent);
        fe = 0;
    }
    else {
        display.textContent = Number(display.textContent).toExponential();
        fe = 1;
    }
})

// button text changed when clicked
degreebtn.addEventListener("click", () => {
    if (degrad == 1) {
        document.querySelector('#degree').innerHTML = "RAD";
        degrad = 0;
    } else {
        document.querySelector('#degree').innerHTML = 'DEG';
        degrad = 1;
    }
})


// Trigonometry Function starts here
sinbtn.addEventListener("click", () => {
    if (degrad) {
        display.textContent = (Math.sin((Math.PI / 180) * Number(display.textContent)));
    } else {
        display.textContent = Math.sin(display.textContent)
    }
});

cosbtn.addEventListener("click", () => {
    if (degrad) {
        display.textContent = (Math.cos((Math.PI / 180) * Number(display.textContent)));
    } else {
        display.textContent = Math.cos(display.textContent)
    }
});

tanbtn.addEventListener("click", () => {
    if (degrad) {
        display.textContent = (Math.tan((Math.PI / 180) * Number(display.textContent)));
    } else {
        display.textContent = Math.tan(display.textContent)
    }
});

secbtn.addEventListener("click", () => {
    if (degrad) {
        display.textContent = 1 / (Math.cos(Math.PI / 180 * display.textContent));
    } else {
        display.textContent = 1 / Math.cos(display.textContent)
    }
});

cotbtn.addEventListener("click", () => {
    if (degrad) {
        display.textContent = 1 / (Math.tan(Math.PI / 180 * display.textContent));
    } else {
        display.textContent = 1 / Math.tan(display.textContent)
    }
});

cscbtn.addEventListener("click", () => {
    if (degrad) {
        display.textContent = 1 / (Math.sin(Math.PI / 180 * display.textContent));
    } else {
        display.textContent = 1 / Math.sin(display.textContent)
    }
});
// Trigonometry Function End here


// this function is erase one value from the back of any displayed value
backEraseButton.addEventListener("click", () => {
    display.textContent = "";
    displayArray.pop();
    tempSpanVariable = document.createElement('span');
    tempSpanVariable.classList.add('colored-text');

    for (let i = 0; i < displayArray.length; i++) {
        tempSpanVariable.append(displayArray[i].textContent)

        display.append(tempSpanVariable)
    }
    characterCounter--

    if (characterCounter < 0) {
        characterCounter = tempcharacterCounter
    }
})


// this function is for clear screen
clearScreen.addEventListener('click', () => {
    display.innerHTML = '';
    characterCounter = 0;
    displayArray = [];
})

