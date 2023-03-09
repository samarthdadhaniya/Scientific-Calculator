/*--------------------------------------------
Name : samarth dadhaniya
Stack : react.js
Project title : Scientific Calculator
GitHub : https://github.com/samarthdadhaniya/
----------------------------------------------*/

let display = "" // selecting display element with it's ID
let button = document.querySelectorAll("button");

// getting number by id------------------------------------
const zero = document.querySelector("#zero");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
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
const floorButton = document.querySelector("#floor");
const ceilButton = document.querySelector("#ceil");
const randomButton = document.querySelector("#random");
const clearScreen = document.querySelector('#clear');
const backEraseButton = document.querySelector('#backEraseButton');
const logButton = document.querySelector('#logbtn');
const lnButton = document.querySelector('#lnbtn');
const xsqureButton = document.querySelector('#xsqurebtn');
const squarerootButton = document.querySelector('#squareroot');
const tenpowerxButton = document.querySelector('#tenpowerx');
const oneuponxButton = document.querySelector('#oneuponx');
const modxButton = document.querySelector('#modx');
const expButton = document.querySelector('#exp');
const fectorialButton = document.querySelector('#fectorial');
const piButton = document.querySelector('#pi');
const constantEButton = document.querySelector('#constantE');
const degreeButton = document.querySelector('#degree')
const radianButton = document.querySelector('#radian')
const feButton = document.querySelector('#fe')
const leftParenthesisButton = document.querySelector('#leftParenthesis')
const rightParenthesisButton = document.querySelector('#rightParenthesis')
const exponentButton = document.querySelector('#exponent')
const xcudeButton = document.querySelector('#xcube');
const cuberootButton = document.querySelector('#cuberoot')
const expmoneButton = document.querySelector('#expmone');
const tworestooxButton = document.querySelector('#tworestoox');
const logonepButton = document.querySelector('#logonep');
const eraisedtooxButton = document.querySelector('#eraisedtoox');
const sigchangeButton = document.querySelector('#sigchange');
// ----------------------------------------------------------
// getting trignomitry button with ID-----------
const sinButton = document.querySelector('#sin');
const secButton = document.querySelector('#sec');
const cosButton = document.querySelector('#cos');
const cscButton = document.querySelector('#csc');
const tanButton = document.querySelector('#tan');
const cotButton = document.querySelector('#cot');
// ---------------------------------------------
document.getElementById('xcube').style.display = "none";
document.getElementById('cuberoot').style.display = "none";
document.getElementById('expmone').style.display = "none";
document.getElementById('tworestoox').style.display = "none";
document.getElementById('logonep').style.display = "none";
document.getElementById('eraisedtoox').style.display = "none";

let second_button = 0;
/**
 * @function display_2nd
 * @description this is hide html element when second_button value is 1
 * @params none
 */
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

let tempSpanVariable;  // temporary span variable to display number
let displayArray = [];  // Final Result Store Here
let characterCounter = 0; // Calculate Total Charactor of Given String By User
let degrad = 1; // For Degree To Radian Button
let fe = 0;  // For 'fe' Button
let memoryArray = []; // To store Memory Data

button.forEach(button => {
    button.addEventListener('click', e => {

        switch (e.target.id) {
            case "zero":
                if (characterCounter < 23) {
                    characterCounter++;
                    document.getElementById('input_display').textContent = display += "0"
                }
                break;
            case "one":
                if (characterCounter < 23) {
                    characterCounter++;
                    document.getElementById('input_display').textContent = display += "1"
                }
                break;
            case "two":
                if (characterCounter < 23) {
                    characterCounter++;
                    document.getElementById('input_display').textContent = display += "2"
                }
                break;
            case "three":
                if (characterCounter < 23) {
                    characterCounter++;
                    document.getElementById('input_display').textContent = display += "3"
                }
                break;
            case "four":
                if (characterCounter < 23) {
                    characterCounter++;
                    document.getElementById('input_display').textContent = display += "4"
                }
                break;
            case "five":
                if (characterCounter < 23) {
                    characterCounter++;
                    document.getElementById('input_display').textContent = display += "5"
                }
                break;
            case "six":
                if (characterCounter < 23) {
                    characterCounter++;
                    document.getElementById('input_display').textContent = display += "6"
                }
                break;
            case "seven":
                if (characterCounter < 23) {
                    characterCounter++;
                    document.getElementById('input_display').textContent = display += "7"
                }
                break;
            case "eight":
                if (characterCounter < 23) {
                    characterCounter++;
                    document.getElementById('input_display').textContent = display += "8"
                }
                break;
            case "nine":
                if (characterCounter < 23) {
                    characterCounter++;
                    document.getElementById('input_display').textContent = display += "9"
                }
                break;
            case "dot_operator":
                if (characterCounter < 23) {
                    characterCounter++;
                    document.getElementById('input_display').textContent = display += "."
                }
                break;
            case "addition_sign":
                if (characterCounter < 23) {
                    characterCounter++;
                    document.getElementById('input_display').textContent = display += "+"
                }
                break;
            case "subtraction_sign":
                if (characterCounter < 23) {
                    characterCounter++;
                    document.getElementById('input_display').textContent = display += "-"
                }
                break;
            case "multiplication_sign":
                if (characterCounter < 23) {
                    characterCounter++;
                    document.getElementById('input_display').textContent = display += "*"
                }
                break;
            case "division_sign":
                if (characterCounter < 23) {
                    characterCounter++;
                    document.getElementById('input_display').textContent = display += "/"
                }
                break;
            case "modulus_sign":
                if (characterCounter < 23) {
                    characterCounter++;
                    document.getElementById('input_display').textContent = display += "%"
                }
                break;
            case "constantE":
                if (characterCounter < 23) {
                    characterCounter++;
                    document.getElementById('input_display').textContent = display += 2.718281828459045
                }
                break;
            case "pi":
                if (characterCounter < 23) {
                    characterCounter++;
                    document.getElementById('input_display').textContent = display += "3.14"
                }
                break;
            case "leftParenthesis":
                if (characterCounter < 23) {
                    characterCounter++;
                    document.getElementById('input_display').textContent = display += "("
                }
                break;
            case "rightParenthesis":
                if (characterCounter < 23) {
                    characterCounter++;
                    document.getElementById('input_display').textContent = display += ")"
                }
                break;
            case "exponent":
                if (characterCounter < 23) {
                    characterCounter++;
                    document.getElementById('input_display').textContent = display += "**"
                }
                break;
            case "clear":
                document.getElementById('input_display').textContent = '';
                characterCounter = 0;
                displayArray = [];
                display = ""
                break;

            default:
                break;
        }
    })
});

/**
 * @function finalResult
 * @description its return a final result and print in display
 * @params none
 * @returns number
 */
function finalResult() {
    /**
    * this error handaling statemanet is handal error when user type like : 
    
    * (right case) print output:
        example-  2+2-2 = 2
    
    * (wrong case) show error:
        example-  2+2-2- = Invalid Input
    
    
    => why beacuse at the we can not write any operator
    
    */
    try {
        function calculate(inputExpression) {
            return new Function("return " + inputExpression)();
        }

        const result = calculate(display);
        console.log(result)

        document.getElementById("input_display").textContent = result;
    }
    catch (error) {

        document.getElementById('input_display').textContent = "Invalid Input!";

        setTimeout(() => {
            document.getElementById('input_display').textContent = "";
            document.getElementById("input_display").value = "";
        }, 3000);
    }
}


// this event is generate random value between 0 to 1 
randomButton.addEventListener("click", () => {
    document.getElementById('input_display').textContent = Math.random();
});


// this event give the base 10 logarithm of a any number
logButton.addEventListener("click", () => {
    document.getElementById('input_display').textContent = Math.log10(document.getElementById('input_display').textContent)
});


// this event perform the natural logarithm of a number
lnButton.addEventListener("click", () => {
    document.getElementById('input_display').textContent = Math.log(document.getElementById('input_display').textContent)
});


// this event give the value of a base raised to a power
xsqureButton.addEventListener("click", () => {
    document.getElementById('input_display').textContent = Math.pow(document.getElementById('input_display').textContent, 2)
});


// this event give  square root of given number
squarerootButton.addEventListener("click", () => {
    document.getElementById('input_display').textContent = Math.sqrt(document.getElementById('input_display').textContent)
});


// this event give the value of a base raised to a power 10
tenpowerxButton.addEventListener("click", () => {
    document.getElementById('input_display').textContent = Math.pow(10, document.getElementById('input_display').textContent)
});


// this event is divide 1 by the number which user can give.
oneuponxButton.addEventListener("click", () => {
    document.getElementById('input_display').textContent = 1 / document.getElementById('input_display').textContent;
});


// this event convert negative value to positive value
modxButton.addEventListener("click", () => {
    if (document.getElementById('input_display').textContent.charAt(0) === "-") {
        document.getElementById('input_display').textContent = document.getElementById('input_display').textContent.slice(1)
    }
});


// this event will return fectorial of given number
fectorialButton.addEventListener("click", () => {
    if (document.getElementById('input_display').textContent < 0) {
        return NaN; // Error: factorial of negative number is undefined
    }
    if (document.getElementById('input_display').textContent === 0 || document.getElementById('input_display').textContent === 1) {
        return 1; // Base case: factorial of 0 or 1
    }
    let result = 1;
    for (let i = 2; i <= document.getElementById('input_display').textContent; i++) {
        result *= i;
    }
    return document.getElementById('input_display').textContent = result;
});


// its chage value plue to minus and minus value to pluse
sigchangeButton.addEventListener("click", () => {
    if (document.getElementById('input_display').textContent.charAt(0) === "-") { //
        document.getElementById('input_display').textContent = document.getElementById('input_display').textContent.slice(1)
    } else {
        document.getElementById('input_display').textContent = "-" + document.getElementById('input_display').textContent
    }
})


// this perform exponential of given input number
expButton.addEventListener("click", () => {
    document.getElementById('input_display').textContent = Math.exp(document.getElementById('input_display').textContent)
});


// this is event  cude value of given number
xcudeButton.addEventListener("click", () => {
    document.getElementById('input_display').textContent = Math.pow(document.getElementById('input_display').textContent, 3)
});


// this event will find cuberoot of given expration by user
cuberootButton.addEventListener("click", () => {
    document.getElementById('input_display').textContent = Math.cbrt(document.getElementById('input_display').textContent)
});


// this is give 'e to the power x' is an exponential function with a base equal to 'e'
eraisedtooxButton.addEventListener("click", () => {
    document.getElementById('input_display').textContent = Math.pow(2.718281828459045, document.getElementById('input_display').textContent)
});


// this will perform the value of Ex minus 1
expmoneButton.addEventListener("click", () => {
    document.getElementById('input_display').textContent = Math.expm1(document.getElementById('input_display').textContent)
});


// this event is perform the natural logarithm (base E) of 1 + a number
logonepButton.addEventListener("click", () => {
    document.getElementById('input_display').textContent = Math.log1p(document.getElementById('input_display').textContent)
});


// this event give the value of 2 to the power of x:
tworestooxButton.addEventListener("click", () => {
    document.getElementById('input_display').textContent = Math.pow(2, document.getElementById('input_display').textContent)
});


// this event rounds a number DOWN to the nearest integer:
floorButton.addEventListener("click", () => {
    document.getElementById('input_display').textContent = Math.floor(document.getElementById('input_display').textContent)
});


// this event do rounds a number Up to the nearest integer:
ceilButton.addEventListener("click", () => {
    document.getElementById('input_display').textContent = Math.ceil(document.getElementById('input_display').textContent)
});


// fe' stands for 'fixed to exponent'
feButton.addEventListener("click", () => {
    if (fe) {
        document.getElementById('input_display').textContent = Number(document.getElementById('input_display').textContent);
        fe = 0;
    }
    else {
        document.getElementById('input_display').textContent = Number(document.getElementById('input_display').textContent).toExponential();
        fe = 1;
    }
})

// button text changed when this event fired 
degreeButton.addEventListener("click", () => {
    if (degrad == 1) {
        document.querySelector('#degree').innerHTML = "RAD";
        degrad = 0;
    } else {
        document.querySelector('#degree').innerHTML = 'DEG';
        degrad = 1;
    }
})

// Trigonometry Function starts here

// SIN 
sinButton.addEventListener("click", () => {
    if (degrad) {
        document.getElementById('input_display').textContent = (Math.sin((Math.PI / 180) * Number(document.getElementById('input_display').textContent)));
    } else {
        document.getElementById('input_display').textContent = Math.sin(document.getElementById('input_display').textContent)
    }
});

// COS
cosButton.addEventListener("click", () => {
    if (degrad) {
        document.getElementById('input_display').textContent = (Math.cos((Math.PI / 180) * Number(document.getElementById('input_display').textContent)));
    } else {
        document.getElementById('input_display').textContent = Math.cos(document.getElementById('input_display').textContent)
    }
});

// TAN 
tanButton.addEventListener("click", () => {
    if (degrad) {
        document.getElementById('input_display').textContent = (Math.tan((Math.PI / 180) * Number(document.getElementById('input_display').textContent)));
    } else {
        document.getElementById('input_display').textContent = Math.tan(document.getElementById('input_display').textContent)
    }
});

// SEC
secButton.addEventListener("click", () => {
    if (degrad) {
        document.getElementById('input_display').textContent = 1 / (Math.cos(Math.PI / 180 * document.getElementById('input_display').textContent));
    } else {
        document.getElementById('input_display').textContent = 1 / Math.cos(document.getElementById('input_display').textContent)
    }
});

// COT
cotButton.addEventListener("click", () => {
    if (degrad) {
        document.getElementById('input_display').textContent = 1 / (Math.tan(Math.PI / 180 * document.getElementById('input_display').textContent));
    } else {
        document.getElementById('input_display').textContent = 1 / Math.tan(document.getElementById('input_display').textContent)
    }
});

// CSC
cscButton.addEventListener("click", () => {
    if (degrad) {
        document.getElementById('input_display').textContent = 1 / (Math.sin(Math.PI / 180 * document.getElementById('input_display').textContent));
    } else {
        document.getElementById('input_display').textContent = 1 / Math.sin(document.getElementById('input_display').textContent)
    }
});
// Trigonometry Function End here

// this is erase one value from the back of any displayed value
backEraseButton.addEventListener("click", () => {
    display =  document.getElementById('input_display').textContent;
    display = display.slice(0,-1);
    document.getElementById('input_display').textContent = display;
})


// this function is for clear screen
clearScreen.addEventListener('click', () => {
    display.innerHTML = '';
    characterCounter = 0;
    displayArray = [];
})


// Memory Function Start Here...

/**
 * @function Enable_MC_MR_Btn
 * @description enable memoryClear and memoryRead Button
 * @params none
 * @returns 
 */
function Enable_MC_MR_Btn() {
    document.querySelector('#MemoryClear').disabled = false;
    document.querySelector('#MemoryRead').disabled = false;
}


// it's store memory which is currently show on display when we clicked
MemoryStoreBtn.addEventListener('click', () => {
    Enable_MC_MR_Btn();

    if (parseFloat(document.getElementById('input_display').textContent) == NaN) {
        alert("Enter a number");
    } else {
        memoryArray.push(parseFloat(document.getElementById('input_display').textContent));
    }
    document.getElementById('input_display').textContent = "";
});


// its return and display value from memory
MemoryReadBtn.addEventListener('click', () => {
    document.getElementById('input_display').textContent = memoryArray[memoryArray.length - 1];
});


// its delete data from memory variable
MemoryClearBtn.addEventListener('click', () => {
    memoryArray = [];
    document.querySelector('#MemoryClear').disabled = true;
    document.querySelector('#MemoryRead').disabled = true;
    document.getElementById('input_display').textContent = "";
    display = "";
})


// this event add value(which we specify) to the memory
MemoryPluseBtn.addEventListener('click', () => {
    Enable_MC_MR_Btn();

    if (memoryArray.length == 0) {
        memoryArray.push(parseFloat(document.getElementById('input_display').textContent));
    } else {
        memoryArray[memoryArray.length - 1] += parseFloat(document.getElementById('input_display').textContent);
    }
})

// this event minus value(which we specify) to the memory
MemoryMinusBtn.addEventListener('click', () => {
    Enable_MC_MR_Btn();

    if (memoryArray.length == 0) {
        memoryArray.push(parseFloat(DO));
    } else {
        memoryArray[memoryArray.length - 1] -= parseFloat(document.getElementById('input_display').textContent);
    }
})
// Memory Function End Here...