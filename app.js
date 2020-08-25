const validator = require("validator");
const getNotes = require("./notes.js");
const chalk = require("chalk");

const msg = getNotes();
console.log(chalk.blue.bgRed.bold(msg));

console.log(chalk.green.bold.inverse("Success!"));
