//function calcate the area of a triangle
function calculateTriangleArea(base, height){
    return 0.5*base*height;
}
//Input the base and height of the triangle
let base = prompt("Enter the base of the triangle");
let height = prompt("Enter the height of the triangle");

//calculate the area
let area = calculateTriangleArea(base, height);

//Display the result
console.log(`the area of the triangle with base ${base} and height ${height} is: ${area}`);