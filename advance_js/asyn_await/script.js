async function showHello() {
    let url = 'https://api.github.com/users';
    let user_data = await fetch(url);
    let response = user_data.json();
    return response;
}

let output = showHello();

output.then((data) => {
    console.log(data);
}).catch("not success");