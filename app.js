const chalk = require("chalk");
const yargs = require("yargs");
const getNotes = require("./notes.js");

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
  handler: function (argv) {
    console.log("Title: " + argv.title, " Body: " + argv.body);
  },
});

//Remove Command
yargs.command({
  command: "remove",
  description: "Remove a note",
  handler: function () {
    console.log("removing a note!");
  },
});

//Read Command
yargs.command({
  command: "read",
  description: "Read Note",
  handler: function () {
    console.log("Read a Note!");
  },
});

//List Command
yargs.command({
  command: "list",
  description: "List Notes",
  handler: function () {
    console.log("Listing Notes!");
  },
});

yargs.parse();
