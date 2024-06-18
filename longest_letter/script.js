document.getElementsByClassName("btn")[0].addEventListener("click", buttonFunc);

function buttonFunc() {

    let fetchVal = document.getElementsByTagName("textarea")[0].value;

    if (fetchVal=="") {
        alert("Enter something");
        document.getElementById("result").innerHTML = ``;
    }
    else {
        let emptyArr = fetchVal.split(" ");
    
        let count = 0;
    
        let str;
    
        emptyArr.forEach((element) => {
            count = element.length;
            str = element;
            emptyArr.forEach((iterator) => {
                if (count>iterator.length) {
                    count = count;
                    str = str;
                }
                else {
                    count = iterator.length;
                    str = iterator;
                }
            });
        });
        
        document.getElementById("result").innerHTML = `the longest word is ${str}, having ${count} letters`;
    }

}