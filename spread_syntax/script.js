
let a1 = [1,10];

let a2 = [2,3,4,5,6,7,8,9];

tuck_array(a1,a2);

function tuck_array(a1,a2) {
    let a1_1 = [a1[0]];
    let a1_2 = [a1[1]];
    console.log(a1);
    console.log(a2);
    let combined_arr = [...a1_1,...a2,...a1_2];
    console.log(combined_arr);
}