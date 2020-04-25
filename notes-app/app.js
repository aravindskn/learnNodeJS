const yargs = require("yargs");
const notes = require("./notes.js");

//Change Yargs Version
yargs.version("1.0.1");

//ADD Command
yargs.command({
  command: "add",
  description: "Add a new note",
  builder: {
    // Arguments for Command
    title: {
      describe: "Title for the Note.",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Content for the Note.",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body); //Handler to do the add functionality
  },
});

//Remove Command
yargs.command({
  command: "remove",
  description: "Remove a note",
  builder: {
    // Arguments for Command
    title: {
      description: "Title of the Note",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.removeNote(argv.title); //Handler to do the remove functionality
  },
});

//Read Command
yargs.command({
  command: "read",
  description: "Read Note",
  builder: {
    // Arguments for Command
    title: {
      description: "title of your note",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.readNote(argv.title); //Handler to do the read functionality
  },
});

//List Command
yargs.command({
  command: "list",
  description: "List Notes",
  handler() {
    notes.listNote(); //Handler to do the list functionality
  },
});

yargs.parse(); //Parse JSON
