class Circle {
    getArea(radius){
        return Math.PI*Math.pow(radius,2);
    };
    getCircumference(radius){
        return 2*Math.PI*radius;
    };
}

let area = new Circle();

console.log(area.getArea(7));

console.log(area.getCircumference(7));