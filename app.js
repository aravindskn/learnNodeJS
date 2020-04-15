const chalk = require("chalk");
const getNotes = require("./notes.js");

const msg = getNotes();
console.log(chalk.blue(msg));
console.log(chalk.green("Success!"));

console.log(process.argv[2]);

const command = process.argv[2];

if (command === "add") {
  console.log("Adding Note!");
} else if (command === "remove") {
  console.log("Remove Note!");
}
