const container = document.querySelector(".container");
const drawColor = document.querySelector("#color");
const eraserButton = document.querySelector("#eraser");
const clearButton = document.querySelector('#clear');
const rainbowbutton = document.querySelector('#rainbow');
const blackButton = document.querySelector('#black');
const colorPickerButton = document.querySelector('#colorPicker');

let value = "Black";

//Initialise app, generate the etch-a-sketch board
generateSketchGrid();
etchASketch();
setGridSize();

//Default: Blackmode
blackButton.addEventListener('click', () => {
    etchASketch();
})
//rainbow mode button
rainbowbutton.addEventListener('click', () => {
    rainbowMode();
})

//Eraser button
eraserButton.addEventListener('click', () => {
    etchASketch('white');
})

//Clear grid button
clearButton.addEventListener('click', () => {
    clearGrid();
    let gridSize = document.querySelector('.setSize').value;
    generateSketchGrid(gridSize);
    etchASketch();
});
//Color picker
colorPickerButton.onchange = function () {
    color = this.value;
    etchASketch(color);
};


function etchASketch(value = "black") { //Default color: black
    const mouseTarget = document.querySelectorAll('div.sketchRow');
    mouseTarget.forEach((m) => {
    m.addEventListener('mouseenter', (e) => { 
        m.style.cssText =`background-color: ${value}`;
    })});
};

function rainbowMode() {
    const mouseTarget = document.querySelectorAll('div.sketchRow');
    mouseTarget.forEach((m) => {
        m.addEventListener('mouseenter', (e)=> {
            let r = Math.floor(Math.random() * 256); 
            let g = Math.floor(Math.random() * 256);
            let b = Math.floor(Math.random() * 256);
            value = `rgb(${r},${g},${b})`;
            m.style.cssText=`background-color: ${value}`;
        });
    })
};

function erase() {
    const mouseTarget = document.querySelectorAll('div.sketchRow');
    mouseTarget.forEach((m) => {
    m.addEventListener('mouseenter', () => {
        m.removeAttribute('id','color');
    })});
};

function clearGrid() {
    container.innerHTML = '';

}

function setGridSize() {
    const gridText = document.querySelector(".sliderText");
    const setSize = document.querySelector(".setSize");
    gridText.innerHTML = `<p>Default Grid: ${setSize.value}</p>`
    setSize.oninput = function() {
        //gridText inner html = Grid Size: value, with a button to submit to call generateSketchGrid
        gridText.innerHTML = `
        <p>Custom size: ${this.value}</p>
        <button type="button value="submit class="button">Generate</button`;
        const generateGridButton = gridText.lastElementChild;
        generateGridButton.addEventListener('click', () => {
            clearGrid();
            generateSketchGrid(setSize.value);
            etchASketch();
        })
        };      
    };

//Initial grid set up
function generateSketchGrid(size = 16) {
    for (let i = 0; i<size; i++) {
        const sketchColumn = document.createElement('div');
        container.appendChild(sketchColumn);
        sketchColumn.classList.add('sketchColumn')  
    }
    const sketchColumns = document.querySelectorAll(".sketchColumn");
    sketchColumns.forEach((s) => {
    for (let j=0; j<size; j++) {
        const sketchRow = document.createElement('div');
        sketchRow.classList.add('sketchRow');
        s.appendChild(sketchRow);
    };
})
};








