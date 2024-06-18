const company = [
    {name:'arun', designation:'trainee web developer'},
    {name:'bhavik', designation:'full stack developer'},
]

let enrollEmployee = (employee,callback) => {
    setTimeout(() => {
        company.push(employee);
        callback();
    }, 3000);
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


let new_employee = {name:'neha', designation:'wordpress developer'};

enrollEmployee(new_employee,getEmployee);

// getEmployee();