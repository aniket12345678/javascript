const company = [
    {name:'arun', designation:'trainee web developer'},
    {name:'bhavik', designation:'full stack developer'},
];

let enrollEmployee = (employee) => {

    let dummyPromise = new Promise((resolve, reject) => {
        let count = 0;
        setTimeout(() => {
            company.push(employee);
            count = 1;
            if (count==1) {
                resolve("new employee inserted successfully");
            }
            else {
                reject("insertion failed");
            }
        }, 3000);
    })

    return dummyPromise;
}

let getEmployee = () => {
    let htmlEmp = "";
    setTimeout(() => {
        company.forEach(iterator => {
            htmlEmp +=`<li>Employee: ${iterator.name} , Designation: ${iterator.designation}</li>`;
        });
        document.getElementById("employeeList").innerHTML = htmlEmp;
    }, 1000);
}

// getEmployee();

let new_employee = {name:'neha', designation:'wordpress developer'};

enrollEmployee(new_employee).then((result) => {
    getEmployee();
    console.log(result);
}).catch((err) => {
    console.log(err);
});