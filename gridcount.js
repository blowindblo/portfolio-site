console.log(document.getElementsByClassName("section-body")[1])
const gridComputedStyle = window.getComputedStyle(document.getElementsByClassName("section-body")[1]);
console.log(gridComputedStyle)
// get number of grid rows
const gridRowCount = gridComputedStyle.getPropertyValue("grid-template-rows").split(" ").length;

// get number of grid columns
const gridColumnCount = gridComputedStyle.getPropertyValue("grid-template-columns").split(" ").length;

console.log(gridRowCount, gridColumnCount);

