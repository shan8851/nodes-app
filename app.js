const chalk = require("chalk");
const yargs = require("yargs");
const getNotes = require("./notes.js");

// Create add yargs command.
yargs.command({
  command: "add",
  describe: "Add a new note",
  handler: () => {
    console.log("Adding a new note");
  },
});

// Create remove yargs command.
yargs.command({
  command: "remove",
  describe: "Remove a note",
  handler: () => {
    console.log("Removing a note");
  },
});

// Create list command.
yargs.command({
  command: "list",
  describe: "Listing all notes",
  handler: () => {
    console.log("Listing all notes");
  },
});

// Create read yargs command.
yargs.command({
  command: "read",
  describe: "Read a note",
  handler: () => {
    console.log("Reading a note");
  },
});

console.log(yargs.argv);
