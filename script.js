const noteTitle = document.getElementById("noteTitle");
const noteContent = document.getElementById("noteContent");
const addNoteButton = document.getElementById("addNote");
const noteList = document.getElementById("noteList");

let notes = [];

function addNote() {
  const note = {
    id: Date.now(),
    title: noteTitle.value,
    content: noteContent.value,
  };
  notes.push(note);
  noteTitle.value = "";
  noteContent.value = "";
  displayNotes();
}

function deleteNote(id) {
    notes = notes.filter((note) => note.id !== id);
    displayNotes();
  }
  