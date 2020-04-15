const chalk = require("chalk");
const getNotes = require("./notes.js");

const msg = getNotes();
console.log(chalk.blue(msg));
console.log(chalk.green("Success!"));
