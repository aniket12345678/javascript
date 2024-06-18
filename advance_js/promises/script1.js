const employee = [
    { name: 'arun', designation: 'trainee web developer' },
    { name: 'bhavik', designation: 'fullstack web developer' },
    { name: 'saryu', designation: 'wordpress developer' }
];

let joinEmployee = () => {
    
    let new_employee = {
        name: 'aniket',
        designation: 'all rounder'
    };
    
    let promise = new Promise((resolve, reject) => {
        if (employee.length==employee.length) {
            employee.push(new_employee);
            resolve("employee joined successfully");
        }
        else {
            reject("employee was rejected");
        }
    })
    return promise;
}

let getEmployee = () => {
    let html =""
    employee.forEach(iterator => {
        html +=`<li>Name:- ${iterator.name}, Designation:- ${iterator.designation} </li>`;
    });
    document.getElementById("employeeList").innerHTML = html;
}

let output = joinEmployee();

output.then(getEmployee).catch((err) => {console.log(err);})