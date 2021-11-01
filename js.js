function createGrid(number){
    const grid = document.querySelector("#grid");
    for(let i = 0; i < number; i++){
        const row = document.createElement("div");
        row.classList.add("grid-row");

        for(let x = 0; x < number; x++){
        const item = document.createElement("div");
        item.classList.add("grid-item");
        row.appendChild(item);
        }

        grid.appendChild(row); 
    }
}

createGrid(16);

const items = document.querySelectorAll(".grid-item");
items.forEach(item => item.addEventListener("mouseenter", function(e){
    item.style.backgroundColor = "black";
}))

