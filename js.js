function createGrid(gridSize){
    const grid = document.querySelector("#grid");

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
        item.style.backgroundColor = "black";
        }))
    }
}

function clearGrid(grid){
    var child = grid.lastElementChild; 
    while (child) {
        grid.removeChild(child);
        child = grid.lastElementChild;
    }
}

createGrid(16);

const items = document.querySelectorAll(".grid-item");
items.forEach(item => item.addEventListener("mouseenter", function(e){
    item.style.backgroundColor = "black";
}))

const clear = document.querySelector("#clear");
clear.addEventListener("click", function(e){
    const gridSize = parseInt(prompt("Enter Size of New Grid: ", 16));
    if(gridSize >= 1 && gridSize <= 100){
        createGrid(gridSize);
    } else {
        alert("Invalid Input");
    }
})