let circle = [2,3,4,5,6];

const area = (item) => {
    return Math.pow(item,2)*Math.PI.toFixed(2);
}

const circumference = (item) => {
    return (2*Math.PI*item).toFixed(2);
}

const diameter = (item) => {
    return 2*item;
}

let answer_area = circle.map(area);
let answer_circumference = circle.map(circumference);
let answer_diameter = circle.map(diameter);

console.log("Area of  the circles:- "+answer_area);
console.log("Cicumference of the circles:- "+answer_circumference);
console.log("Diameter of the circles:- "+answer_diameter);