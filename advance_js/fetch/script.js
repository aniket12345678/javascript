let api = fetch('https://api.github.com/users');

// setTimeout(() => {
//     console.log(api);
// }, 3000);

api.then((content) => console.log(content)).catch((err) => console.log(err));