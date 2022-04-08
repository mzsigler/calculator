const display = document.getElementById("display");
const clear = document.getElementById('clear');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const plus = document.getElementById('plus');

let displayValue = 0;
display.innerText = `${displayValue}`;

function sevenTap() {
    displayValue = 7;
    display.innerText = `${displayValue}`;
};

function eightTap() {
    displayValue = 8;
    display.innerText = `${displayValue}`;
};

function nineTap() {
    displayValue = 9;
    display.innerText = `${displayValue}`;
};

function clearTap() {
    displayValue = 0;
    display.innerText = `${displayValue}`;
}


seven.addEventListener('click', function(){
    sevenTap();
});

eight.addEventListener('click', function() {
    eightTap();
});

nine.addEventListener('click', function() {
    nineTap();
})


clear.addEventListener('click', function(){
    clearTap();
});

