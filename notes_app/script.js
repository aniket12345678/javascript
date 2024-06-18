document.getElementById("add_notes_button").addEventListener("click", addNotes);

const showNotes = () => {
    let fetch_notes = localStorage.getItem("notes");
    
    if (fetch_notes!==null) {
        document.getElementById("save_notes").innerHTML = JSON.parse(fetch_notes);
    }
}

showNotes();


function addNotes() {
    let textNote = document.getElementsByTagName("textarea")[0].value;
    let notes_title = document.getElementById("notes_title").value;
    let html="";

    html += '<div class="col-md-3 mx-3">';
    html += '<div class="card" style="width: 18rem">';
    html += '<div class="card-body">';
    html += '<h5 class="card-title">'+notes_title+'</h5>';
    html += '<p class="card-text">';
    html += textNote
    html += '</p>';
    html += '<button type="button" class="btn btn-outline-primary" onclick="deleteNotes()">Delete note</button>';
    html += '</div>';
    html += '</div>';
    html += '</div>';    

    let fetch_notes = localStorage.getItem("notes");

    let notes;
    if (fetch_notes==null) {
        notes = [];
    }
    else {
        notes = JSON.parse(fetch_notes);
    }
    notes.push(html);
    localStorage.setItem("notes",JSON.stringify(notes));

    document.getElementsByTagName("textarea")[0].value = "";
    document.getElementById("notes_title").value = "";

    showNotes();
}

function deleteNotes() {
    alert("hi");
}