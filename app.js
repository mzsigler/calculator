const display = document.getElementById("display");
const clear = document.getElementById('clear');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const plus = document.getElementById('plus');
const multiply = document.getElementById('multiply');
const equals = document.getElementById('equals');

let operand = "";
let first = "";
let second = "";

display.innerText = `${first}`;

function operate(){

    let a = parseInt(first);
    let b = parseInt(second);

    if (operand == "add") {
        let result = a + b;
        display.innerText = `${result}`;
    }

    if(operand == "multiply") {
        let result = a * b;
        display.innerText = `${result}`;
    }

}


function sevenTap() {
    if (!operand) {
    first ? first+= '7' : first = '7' ;
    display.innerText = `${first}`;
    }

    if (operand) {
        second ? second+= '7' : second = '7' ;
        display.innerText = `${second}`;
    }
    
};

function eightTap() {
    if (!operand) {
        first ? first+= '8' : first = '8' ;
        display.innerText = `${first}`;
        }
    
        if (operand) {
            second ? second+= '8' : second = '8' ;
            display.innerText = `${second}`;
        }
};

function nineTap() {
    first ? first+= '9' : first = '9' ;
    display.innerText = `${first}`;
};

function clearTap() {
    first = 0;
    second = "";
    result = "";
    operand = ""
    display.innerText = `${first}`;
}

function plusTap() {
    operand = "add";
}

function multiplyTap() {
    operand = "multiply";
}




seven.addEventListener('click', function(){
    sevenTap();
});

eight.addEventListener('click', function() {
    eightTap();
});

nine.addEventListener('click', function() {
    nineTap();
});


clear.addEventListener('click', function(){
    clearTap();
});

plus.addEventListener('click', function(){
    plusTap();
});

multiply.addEventListener('click', function() {
    multiplyTap();
})


equals.addEventListener('click', function(){
    operate();
})