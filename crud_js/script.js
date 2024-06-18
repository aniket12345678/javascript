var selectedRow;

const save_update = () => {
    var form = readFormData()
    if (selectedRow==undefined) {
        save(form);   
    }
    else {
        update_record(form);
    }
}

const readFormData = () => {
    let form_name = document.getElementById("user_name").value;
    let form_profession = document.getElementById("user_profession").value;
    let form_age = document.getElementById("user_age").value;

    let user_form_details = {};
    user_form_details['name'] = form_name;
    user_form_details['profession'] = form_profession;
    user_form_details['age'] = form_age;

    return user_form_details;
}


const save = (form) => {
    insertRecord(form);
}

function insertRecord(user_details) {

    let target_tbody = document.getElementsByTagName("tbody")[0];

    let table_row_length = document.getElementById("user_table").rows.length;
    
    let newRow = target_tbody.insertRow(target_tbody.length);

    cell1 = newRow.insertCell(0);
    cell1.innerHTML = table_row_length;
    cell1 = newRow.insertCell(1);
    cell1.innerHTML = user_details.name;
    cell1 = newRow.insertCell(2);
    cell1.innerHTML = user_details.profession;
    cell1 = newRow.insertCell(3);
    cell1.innerHTML = user_details.age;
    cell1 = newRow.insertCell(4);
    cell1.innerHTML = '<button type="button" class="btn btn-outline-primary" onclick="edit(this)">Edit</button>&nbsp;&nbsp;'+'<button type="button" class="btn btn-outline-danger" onclick="delete_user_data(this)">Delete</button>';

    resetForm();
}

const edit = (item) => {
    document.getElementById("user_name").value = item.parentElement.parentElement.cells[1].innerHTML;
    document.getElementById("user_profession").value = item.parentElement.parentElement.cells[2].innerHTML;
    document.getElementById("user_age").value = item.parentElement.parentElement.cells[3].innerHTML;
    selectedRow = item.parentElement.parentElement;
}

const update_record = (item) => {
    selectedRow.cells[1].innerHTML = item.name;
    selectedRow.cells[2].innerHTML = item.profession;
    selectedRow.cells[3].innerHTML = item.age;
}

const delete_user_data = (val) => {
    if (!confirm("Do you want to delete this record?")) {
        return false;
    }
    else {
        document.getElementById("user_table").deleteRow(val.parentElement.parentElement.rowIndex);
    }
    resetForm();
}

const resetForm = () => {
    document.getElementById("user_name").value = "";
    document.getElementById("user_profession").value = "";
    document.getElementById("user_age").value = "";
    selectedRow = null;
}