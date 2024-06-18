const arr = [84,32,12,345,33,56,87];
// const arr = {editor:'VS code', lang:'javascript', version:'ES6'};

// console.log(arr);
// console.table(arr);

//----------------------------- conventional for loop -----------------------------//

// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     console.log(element);
// }

//----------------------------- foreach loop -----------------------------//

arr.forEach((element,index,array) => {
    console.log(element,index,array); 
});

//----------------------------- forof loop -----------------------------//

// for (const iterator of arr) {
//     console.log(iterator);
// }

//----------------------------- forin loop -----------------------------//

// for (const key in arr) {
//     if (Object.hasOwnProperty.call(arr, key)) {
//         const element = arr[key];
//         console.log(element);
//     }
// }