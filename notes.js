const fs = require("fs");
const chalk = require("chalk");

const getNotes = function () {
  return "Your notes...";
};

const addNote = function (title, body) {
  const notes = loadNote();
  const duplicateNote = notes.filter(function (note) {
    return note.title === title;
  });
  if (duplicateNote.length === 0) {
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

const removeNote = function (title) {
  const notes = loadNote();
  const findNote = notes.filter(function (note) {
    return note.title != title;
  });
  if (notes.length > findNote.length) {
    saveNote(findNote);
    console.log(chalk.green("Note Removed!"));
  } else {
    console.log(chalk.red("No Note Found!"));
  }
};

const saveNote = function (notes) {
  const notesString = JSON.stringify(notes);
  fs.writeFileSync("notes.json", notesString);
};

const loadNote = function () {
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
};
