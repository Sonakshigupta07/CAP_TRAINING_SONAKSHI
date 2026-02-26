function createTable(){
let table = document.createElement("table");

for(let i=0; i<5; i++){
    let row = document.createElement("tr");

    for(let j=0; j<5; j++){
        let cell = document.createElement("td");
        cell.innerText = (i+1) + "," + (j+1);  
        row.appendChild(cell);
    }
    table.appendChild(row);
}
document.body.appendChild(table);
}
