let radius = prompt('What is the radius of the circle?');

    function getAreaOfCircle() {

        let area = 3.14*(radius * radius);
        return area;
    }
    console.log(getAreaOfCircle())

//


let radius = prompt(`What is the radius of the circle?`);

    function getCircumferanceOfCircle() {
        let circumferance = (2*3.14*radius);
        return circumferance;
    }
    console.log(getCircumferanceOfCircle())

//

let side = prompt(`What is the length of one of the sides of the square?`);
    function getAreaOfSquare() {
        let area = (side*side);
        return area;
    }
    console.log(getAreaOfSquare())

//    

function getAreaOfTriangle(a, b) {
    let area = (a * b) / 2;
    return area;
}   
    console.log(getAreaOfTriangle(5, 5));


let sideA = prompt(`What is the height of one of the sides?`);
let sideB = prompt(`What is the base of the other side?`);

    console.log(getAreaOfTriangle(sideA, sideB));


