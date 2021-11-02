let brushColor = "black";

function createGrid(gridSize){
    const grid = document.querySelector(".grid");

    clearGrid(grid);
        
    for(let i = 0; i < gridSize; i++){
        const row = document.createElement("div");
        row.classList.add("grid-row");

        for(let x = 0; x < gridSize; x++){
        const item = document.createElement("div");
        item.classList.add("grid-item");
        row.appendChild(item);
        }

        grid.appendChild(row); 

        const items = document.querySelectorAll(".grid-item");
        items.forEach(item => item.addEventListener("mouseenter", function(e){
        item.style.backgroundColor = brushColor;
        }))
    }
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('gridClear');
  }

function clearGrid(grid){
    let child = grid.lastElementChild; 
    while (child) {
        grid.removeChild(child);
        child = grid.lastElementChild;
    }
}

function changeBrushColor(e){
    const color = this.id
    switch(color){
        case "red":
            brushColor = "darkred";
            break;
        case "blue":
            brushColor = "cadetblue";
            break;
        case "green":
            brushColor = "forestgreen";
            break;
        case "yellow":
            brushColor = "darkgoldenrod";
            break;
        case "white":
            brushColor = "white";
            break;
        case "black":
            brushColor = "black";
            break;
    }
}

function resizeGrid() {
    const gridSize = parseInt(prompt("Enter Grid Size: ", 16));
    if(gridSize >= 1 && gridSize <= 100){
        const grid = document.querySelector(".grid");
        grid.classList.add("gridClear");
        createGrid(gridSize);
    } 
}

createGrid(16);

const clear = document.querySelector("#clear");
clear.addEventListener("click", resizeGrid);

const grid = document.querySelector(".grid");
grid.addEventListener('transitionend', removeTransition);

const colorButtons = document.querySelectorAll(".color-button");
colorButtons.forEach(colorButton => colorButton.addEventListener("click", changeBrushColor));