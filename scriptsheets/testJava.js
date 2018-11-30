

function tableTest() {
  var myTable = document.getElementById('mesa');

console.log("tableTest is running!");

var oldCell = document.getElementsByTagName("td");
var tRow = document.getElementsByTagName("tr");

console.log("first part is running okay");
if (tRow.length > 0) {
var y = tRow.length;
for (x = 0; y > x; x++) {

myTable.removeChild(myTable.lastChild);

}

}


makeRows();
}

function makeRows() {
  var myTable = document.getElementById('mesa');
  var gridHeight = document.getElementById("heightNumber").value;
  var gridWidth = document.getElementById("widthNumber").value;

for (x = 0; x < gridHeight; x++) {
  var newRow = document.createElement("tr");
    myTable.appendChild(newRow);

for (y = 0; y < gridWidth; y++) {
  var newCell = document.createElement("td");
    newRow.appendChild(newCell);
    newCell.addEventListener("click", newColor, false);
    newCell.addEventListener("contextmenu", function(e) {e.preventDefault();}, false);
    newCell.addEventListener("contextmenu", newColor, false);
    newCell.style.backgroundColor = "white";
} }
}

var newColor = function paintMe(event) {
var color = document.getElementById("pickColor").value;
if (event.which === 1) {

this.style.backgroundColor = color;
console.log(event);
}

if (event.which === 3) {

  this.style.backgroundColor = "#FFF";
}

}

