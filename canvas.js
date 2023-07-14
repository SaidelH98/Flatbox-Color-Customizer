//Initial Colors
let shellColor = 2;
let leftButtonColor = 1;
let downButtonColor = 1;
let rightButtonColor = 1;
let upButtonColor = 1;
let squareButtonColor = 0;
let triangleButtonColor = 0;
let r1ButtonColor = 0;
let l1ButtonColor = 0;
let crossButtonColor = 0;
let circleButtonColor = 0;
let r2ButtonColor = 0;
let l2ButtonColor = 0;

//Create canvas
function loadCanvas(){

    var canvas = document.querySelector('canvas');

    canvas.width = 801;
    canvas.height = 529;

    var c = canvas.getContext('2d');

    //Colors
    var white = 'rgb(221, 213, 206)';
    var red = 'rgb(213, 60, 52)';
    var black = 'rgb(20,19,22)';
    var marble = 'rgb(196, 204, 221)';
    var magenta = 'rgb(217, 66, 103)';
    var orange = 'rgb(213, 134, 8)';
    var green = 'rgb(108, 192, 111)';
    var pink = 'rgb(210, 180, 195)';
    var blue = 'rgb(8, 113, 196)';
    var redMarble = 'rgb(103, 43, 15)';
    var darkGreen = 'rgb(26, 106, 129)';
    var gray = 'rgb(162, 187, 201)';
    var darkRed = 'rgb(130, 44, 37)';
    var yellow = 'rgb(225, 224, 1)';
    var lightBlue = 'rgb(156, 221, 242)';
    var purple = 'rgb(121, 109, 193)';

    var colorsArray = [white, red, black, marble, magenta, orange, green, pink, blue, redMarble, darkGreen, gray, darkRed, yellow, lightBlue, purple];

    //Button Colors

    var leftButton = colorsArray[leftButtonColor];
    var downButton = colorsArray[downButtonColor];
    var rightButton = colorsArray[rightButtonColor];
    var upButton = colorsArray[upButtonColor];
    var crossButton = colorsArray[crossButtonColor];
    var squareButton = colorsArray[squareButtonColor];
    var circleButton = colorsArray[circleButtonColor];
    var triangleButton = colorsArray[triangleButtonColor];
    var r2Button = colorsArray[r2ButtonColor];
    var r1Button = colorsArray[r1ButtonColor];
    var l2Button = colorsArray[l2ButtonColor];
    var l1Button = colorsArray[l1ButtonColor];
    var shell = colorsArray[shellColor];

    //Shell and Button Colors
    c.fillStyle = shell;
    c.fillRect(0, 0, 801, 529);

    var coords = [[85, 151, leftButton], [190, 151, downButton], [285, 198, rightButton], [359, 397,upButton], 
                [416, 132, squareButton], [397, 265, crossButton], [516, 94, triangleButton], [497, 217, circleButton],
                [616, 94, r1Button], [597, 217, r2Button], [716, 94, l1Button], [697, 217, l2Button]];

    for(var i = 0; i < coords.length; i++){
        c.beginPath()
        if (i == 3){
            c.arc(coords[i][0], coords[i][1], 57, 0, Math.PI * 2, true);
        } else {
            c.arc(coords[i][0], coords[i][1], 45, 0, Math.PI * 2, true);
        }
        c.fillStyle = coords[i][2];
        c.fill();
        if (shell === black){
            c.strokeStyle = white;
        } else {
            c.strokeStyle = black;
        }
        c.stroke();
    }
    console.log(canvas);
}

//Initial load
loadCanvas();

//Change Button Colors
document.getElementById("leftButton").addEventListener("change", onLeftButtonChange);
document.getElementById("downButton").addEventListener("change", onDownButtonChange);
document.getElementById("rightButton").addEventListener("change", onRightButtonChange);
document.getElementById("upButton").addEventListener("change", onUpButtonChange);
document.getElementById("shellColor").addEventListener("change", onShellColorChange);
document.getElementById("squareButton").addEventListener("change", onSquareButtonChange);
document.getElementById("triangleButton").addEventListener("change", onTriangleButtonChange);
document.getElementById("r1Button").addEventListener("change", onR1ButtonChange);
document.getElementById("l1Button").addEventListener("change", onL1ButtonChange);
document.getElementById("crossButton").addEventListener("change", onCrossButtonChange);
document.getElementById("circleButton").addEventListener("change", onCircleButtonChange);
document.getElementById("r2Button").addEventListener("change", onR2ButtonChange);
document.getElementById("l2Button").addEventListener("change", onL2ButtonChange);

function onLeftButtonChange(event){
    let leftButtonEvent = event.target;
    leftButtonColor = leftButtonEvent.value;
    loadCanvas();
}

function onDownButtonChange(event){
    let downButtonEvent = event.target;
    downButtonColor = downButtonEvent.value;
    loadCanvas();
}

function onRightButtonChange(event){
    let rightButtonEvent = event.target;
    rightButtonColor = rightButtonEvent.value;
    loadCanvas();
}

function onUpButtonChange(event){
    let upButtonEvent = event.target;
    upButtonColor = upButtonEvent.value;
    loadCanvas();
}

function onShellColorChange(event){
    let shellColorEvent = event.target;
    shellColor = shellColorEvent.value;
    loadCanvas();
}

function onSquareButtonChange(event){
    let squareColorEvent = event.target;
    squareButtonColor = squareColorEvent.value;
    loadCanvas();
}

function onTriangleButtonChange(event){
    let triangleColorEvent = event.target;
    triangleButtonColor = triangleColorEvent.value;
    loadCanvas();
}

function onR1ButtonChange(event){
    let r1ColorEvent = event.target;
    r1ButtonColor = r1ColorEvent.value;
    loadCanvas();
}

function onL1ButtonChange(event){
    let l1ColorEvent = event.target;
    l1ButtonColor = l1ColorEvent.value;
    loadCanvas();
}

function onCrossButtonChange(event){
    let crossColorEvent = event.target;
    crossButtonColor = crossColorEvent.value;
    loadCanvas();
}

function onCircleButtonChange(event){
    let circleColorEvent = event.target;
    circleButtonColor = circleColorEvent.value;
    loadCanvas();
}

function onR2ButtonChange(event){
    let r2ColorEvent = event.target;
    r2ButtonColor = r2ColorEvent.value;
    loadCanvas();
}

function onL2ButtonChange(event){
    let l2ColorEvent = event.target;
    l2ButtonColor = l2ColorEvent.value;
    loadCanvas();
}

