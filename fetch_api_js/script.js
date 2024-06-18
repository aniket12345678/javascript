//------------------------------------------- GET method -------------------------------------------//

// function getData() {
//     fetch('https://api.github.com/users').then((response) => {
//         // console.log(response.text());
//         return response.json();
//     }).then((data) => {
//         console.log(data);
//     })
// }

//------------------------------------------- POST method -------------------------------------------//

function getData() {
    let url = "https://dummy.restapiexample.com/api/v1/create";
    let data = '{"name":"sdfgdsgsdfgdfs","salary":"123","age":"23"}';
    let params = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: data
    }

    fetch(url, params).then((response) => {
        // console.log(response.text());
        return response.json();
    }).then((data) => {
        console.log(data);
    })
}

let fetch_data = getData();

console.log(fetch_data);