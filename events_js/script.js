let btnCount = document.getElementsByClassName("btn");

for (let i = 0; i < btnCount.length; i++) {
    btnCount[i].addEventListener("click", function () { console.log("hi, I am no "+i); });
}

const selectOption = () => {
    let select_name = document.getElementById("select_name").value;

    if (select_name=="aniket") {
        console.log("React Js");
    }
    else {
        console.log("Javascript");
    }
}

// document.getElementById("eventListener").addEventListener("mouseenter",buttonFunc)

// document.getElementById("eventListener").addEventListener("mouseleave",buttonFunc1)

// $("#eventListener").mouseenter(buttonFunc);

// function buttonFunc() {
//     console.log("enter");
// }

// function buttonFunc1() {
//     console.log("exit");
// }



// $(selector).mousemove(function (e) { 
//     // values: e.clientX, e.clientY, e.pageX, e.pageY
    
// });

let htmlContainer = document.getElementsByTagName("body")[0];

htmlContainer.addEventListener("mousemove",move);

function move(e) {
    htmlContainer.style.background = `rgb(${e.offsetX}, ${e.offsetY}, ${e.offsetY})`;
}