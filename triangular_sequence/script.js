let triangle_val = prompt("Enter side:- ");

let triangle = (tri_val) => {
    return ((0.5)*Math.pow(tri_val,2)) + (0.5*tri_val)
}

let answer = triangle(triangle_val);
console.log(answer);