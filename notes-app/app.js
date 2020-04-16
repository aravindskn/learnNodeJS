const yargs = require("yargs");
const notes = require("./notes.js");

//Change Yargs Version
yargs.version("1.0.1");

//ADD Command
yargs.command({
  command: "add",
  description: "Add a new note",
  builder: {
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
    notes.addNote(argv.title, argv.body);
  },
});

//Remove Command
yargs.command({
  command: "remove",
  description: "Remove a note",
  builder: {
    title: {
      description: "Title of the Note",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.removeNote(argv.title);
  },
});

//Read Command
yargs.command({
  command: "read",
  description: "Read Note",
  builder: {
    title: {
      description: "title of your note",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.readNote(argv.title);
  },
});

//List Command
yargs.command({
  command: "list",
  description: "List Notes",
  handler() {
    notes.listNote();
  },
});

yargs.parse();
