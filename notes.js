const fs = require("fs");
const chalk = require("chalk");

const getNotes = () => "Your notes...";

const addNote = (title, body) => {
  const notes = loadNote();
  const duplicateNote = notes.find((note) => note.title === title);

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });
    saveNote(notes);
    console.log(chalk.green("Note Added."));
  } else {
    console.log(chalk.blue("Note already Present!"));
  }
};

const removeNote = (title) => {
  const notes = loadNote();
  const findNote = notes.filter((note) => note.title != title);

  if (notes.length > findNote.length) {
    saveNote(findNote);
    console.log(chalk.green("Note Removed!"));
  } else {
    console.log(chalk.red("No Note Found!"));
  }
};

const listNote = () => {
  const notes = loadNote();
  console.log(chalk.blue("Your Notes are:"));
  notes.forEach((element) => {
    console.log(element.title);
  });
};

const readNote = (title) => {
  const notes = loadNote();
  const note = notes.find((note) => note.title === title);

  if (note) {
    console.log(chalk.blue(note.title) + " " + note.body);
  } else {
    console.log(chalk.red("Note Not Found!"));
  }
};

const saveNote = (notes) => {
  const notesString = JSON.stringify(notes);
  fs.writeFileSync("notes.json", notesString);
};

const loadNote = () => {
  try {
    const noteBuffer = fs.readFileSync("notes.json");
    const noteString = noteBuffer.toString();
    return JSON.parse(noteString);
  } catch (error) {
    return [];
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNote: listNote,
  readNote: readNote,
};
