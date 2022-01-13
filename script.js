const container = document.querySelector(".container");

generateSketchGrid(16,16);
onMouseOver();

function generateSketchGrid(col,rows) {
    for (let i = 0; i<col; i++) {
        const sketchColumn = document.createElement('div');
        container.appendChild(sketchColumn);
        sketchColumn.classList.add('sketchColumn')  
    }
    const sketchColumns = document.querySelectorAll(".sketchColumn");
    sketchColumns.forEach((sC) => {
    for (let j=0; j<rows; j++) {
        const sketchRow = document.createElement('div');
        sketchRow.classList.add('sketchRow');
        sC.appendChild(sketchRow);
    };
})
};

function onMouseOver() {
    let mouseTarget = document.querySelectorAll('div.sketchRow');
    mouseTarget.forEach((mT) => {
    mT.addEventListener('mouseenter', () => {
        mT.setAttribute('id','mouseWave');
    })});
    
};


