const container = document.querySelector('.container');
const center = document.querySelector('.center');
const sizeButton = document.getElementById('sizeButton');
const eraserButton = document.getElementById('eraserButton');
const penButton = document.getElementById('penButton');
const randomColorButton = document.getElementById('RandomColor');
const colorChoose = document.getElementById('chooseColor');
let clickCount = 0;
randomColorButton.addEventListener('click', () => {color(true)})
sizeButton.addEventListener('click', () => {getSize()});
clearButton.addEventListener('click', () =>{clearCanvas()})
eraserButton.addEventListener('click', () =>{erase()})
penButton.addEventListener('click', () => {color()});
generateGrid(16);

function clearCanvas(){
    for(let i=0; i<container.children.length; i++){
        if (container.children[i].style.backgroundColor){
            container.children[i].style.backgroundColor = '';
        }
    }
}

function getSize(){
    let userSize = prompt('Enter what size you would like the pen to be (max: 100)');
    if (!userSize) return;
    while (userSize > 100 || userSize <= 0){
        userSize = prompt("Please enter a valid pen size"); 
    }
    generateGrid(userSize);
}

function generateGrid(userSize){
    container.innerHTML ="";
    container.style.gridTemplateColumns = `repeat(${userSize}, ${100/userSize}%)`;
    container.style.gridTemplateRows = `repeat(${userSize}, ${100/userSize}%)`;
    for(let i = 1; i<=(userSize**2); i++){
        const newDiv = document.createElement('div');
        newDiv.classList.add("divNumber"+i)
        container.appendChild(newDiv);
    }
    color();
}

function erase(){
    clickCount++
    for(let i=0; i<container.children.length; i++){
        container.children[i].addEventListener('mouseover', e => {
            container.children[i].style.backgroundColor = '';
        })
    }
    if (clickCount % 2 !== 0){
        eraserButton.style.borderStyle = 'solid'
        eraserButton.style.borderWidth = '3px';
        eraserButton.style.borderColor = 'gold';
    }
    else{
        eraserButton.style.borderColor = null;
        eraserButton.style.borderStyle = null;
        eraserButton.style.borderWidth = null;
        color();
    }
}


function color(randomColor=false){
    eraserButton.style.borderColor = null;
    eraserButton.style.borderStyle = null;
    eraserButton.style.borderWidth = null;
    for(let i=0; i < container.children.length; i++){
        container.children[i].addEventListener('mouseover', e => {
            if (randomColor){
                randomColorGen = '#' + Math.floor(Math.random()*16777215).toString(16);
                container.children[i].style.backgroundColor = randomColorGen;
            }
            else{
                container.children[i].style.backgroundColor = 'black';
            }
        });
    }
}


