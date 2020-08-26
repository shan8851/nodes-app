const fs = require("fs");
const chalk = require("chalk");

const getNotes = () => {
  return "Your notes....";
};

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title);

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.green.inverse("Success - new note added"));
  } else {
    console.log(chalk.red.inverse("Error - note title already used"));
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const notesAfterDeletion = notes.filter((note) => note.title !== title);
  saveNotes(notesAfterDeletion);
  if (notes.length !== notesAfterDeletion.length) {
    console.log(
      chalk.green(
        "Success: " +
          chalk.white(
            "note with title " + chalk.magenta(title) + " has been removed."
          )
      )
    );
  } else {
    console.log(
      chalk.red(
        "Oops: " +
          chalk.white(
            "note with title " + chalk.magenta(title) + " does not exist."
          )
      )
    );
  }
};

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.bold.green.inverse("Your Notes:"));
  notes.map((note) => console.log(note.title));
};

const readNote = (title) => {
  const notes = loadNotes();
  const selectedNote = notes.find((note) => note.title === title);
  if (selectedNote) {
    console.log(chalk.green.underline(selectedNote.title));
    console.log(chalk.white(selectedNote.body));
  } else {
    console.log(chalk.red("Error: " + chalk.white("Note not found")));
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (err) {
    return [];
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote,
};
