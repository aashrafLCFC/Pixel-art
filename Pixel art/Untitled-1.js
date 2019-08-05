/* jshint esnext: true */
/* global document */
let canvasr = document.getElementById("pixel_canvas");
let heights = document.getElementById("input_height");
let widths = document.getElementById("input_width");
let sizePickers = document.getElementById("sizePicker");
let colors = document.getElementById("colorPicker");

colors.addEventListener("click", function(){});

sizePickers.onsubmit = function(event){
    event.preventDefault();
    clearGrid();
    makeGrid();
};

function makeGrid() {
    for (let r=0; r<heights.value; r++){
        const row = canvasr.insertRow(r);
        for (let c=0; c<widths.value; c++){
            const cell = row.insertCell(c);
            cell.addEventListener("click", fillSquare);
        }
    }
}

function clearGrid(){
    while (canvasr.firstChild){
         canvasr.removeChild(canvasr.firstChild);
    }
}
// alternative code:
// while (table.rows.length > 0) {
//  table.deleteRow(0);
// }

function fillSquare () {
    this.setAttribute("style", `background-color: ${colors.value}`);
}