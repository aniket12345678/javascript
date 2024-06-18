let arr = [2,56,78,11,66,47,45];

highest_lowest_element(arr);

var max_temp;
var min_temp;

function highest_lowest_element(arr) {
    for (let index = 0; index < arr.length; index++) {
        max_temp = arr[index];
        for (let i = 0; i < arr.length; i++) {
            let next_element = arr[i];
            if (max_temp>next_element) {
                max_temp=max_temp;
            }
            else {
                max_temp=next_element;
            }
        }
    }
    for (let z = 0; z < arr.length; z++) {
        min_temp = arr[z];
        for (let x = 0; x < arr.length; x++) {
            let next_element = arr[x];
            if (min_temp<next_element) {
                min_temp=min_temp;
            }
            else {
                min_temp=next_element;
            }
        }
    }
    console.log("highest element of the array :- ",max_temp);
    console.log("lowest element of the array :- ",min_temp);
}


//------------------------------------- Alternate method -------------------------------------//



// function highest_lowest_element(arr) {
//     console.log("highest element of the array :- ",Math.max(...arr));
//     console.log("lowest element of the array :- ",Math.min(...arr));
// }



//------------------------------------- Alternate method -------------------------------------//



// function highest_lowest_element(arr) {
//     console.log("highest element of the array :- ",Math.max.apply(null,arr));
//     console.log("lowest element of the array :- ",Math.min.apply(null,arr));
// }