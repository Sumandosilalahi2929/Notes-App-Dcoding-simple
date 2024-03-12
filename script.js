
const dummyData = [

];


const notesContainer = document.getElementById('notes-container');

function displayNotes(notes) {
    notesContainer.innerHTML = '';
    notes.forEach(note => {
        const noteCard = document.createElement('div');
        noteCard.classList.add('note-card');

        const title = document.createElement('div');
        title.classList.add('note-title');
        title.textContent = note.title;

        const body = document.createElement('div');
        body.classList.add('note-body');
        body.textContent = note.body;

        noteCard.appendChild(title);
        noteCard.appendChild(body);
        notesContainer.appendChild(noteCard);
    });
}

displayNotes(dummyData);


const addNoteForm = document.getElementById('add-note-form');
addNoteForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const titleInput = document.getElementById('note-title');
    const bodyInput = document.getElementById('note-body');

    const newNote = {
        title: titleInput.value,
        body: bodyInput.value,
    };

    dummyData.push(newNote);
    displayNotes(dummyData);

   
    addNoteForm.reset();
});


const searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', function() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const filteredNotes = dummyData.filter(note => note.title.toLowerCase().includes(searchInput));
    displayNotes(filteredNotes);
});