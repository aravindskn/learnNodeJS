const fs = require("fs");
const chalk = require("chalk");

const getNotes = () => "Your notes...";

//Handle Add Functionality
const addNote = (title, body) => {
  const notes = loadNote(); //Load the Notes from File
  const duplicateNote = notes.find((note) => note.title === title); //Find Duplicate

  if (!duplicateNote) {
    //If no Duplicate push to File
    notes.push({
      title: title,
      body: body,
    });
    saveNote(notes); //Save New Data
    console.log(chalk.green("Note Added."));
  } else {
    console.log(chalk.blue("Note already Present!"));
  }
};
//Handle Remove Functionality
const removeNote = (title) => {
  const notes = loadNote(); //Load the Notes from File
  const findNote = notes.filter((note) => note.title != title); //Get List of Notes without removed Data

  if (notes.length > findNote.length) {
    saveNote(findNote); //Save Notes
    console.log(chalk.green("Note Removed!"));
  } else {
    console.log(chalk.red("No Note Found!"));
  }
};
//Handle List Functionality
const listNote = () => {
  const notes = loadNote(); //Load Notes
  console.log(chalk.blue("Your Notes are:"));
  notes.forEach((element) => {
    console.log(element.title);
  });
};
//Hanlde Read Functionality
const readNote = (title) => {
  const notes = loadNote(); //Load Notes
  const note = notes.find((note) => note.title === title); //Find Note

  if (note) {
    console.log(chalk.blue(note.title) + " " + note.body);
  } else {
    console.log(chalk.red("Note Not Found!"));
  }
};
//Save Notes
const saveNote = (notes) => {
  const notesString = JSON.stringify(notes);
  fs.writeFileSync("notes.json", notesString);
};
//Load Notes
const loadNote = () => {
  try {
    const noteBuffer = fs.readFileSync("notes.json"); //Read File
    const noteString = noteBuffer.toString(); //Convert buffer to String
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
