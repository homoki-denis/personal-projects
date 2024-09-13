#!/usr/bin/env node
const add = require("./controllers/add");

const args = process.argv.slice(2);

const command = args[0];

switch (command) {
  case "add":
    const task = args.slice(1).join(" ");
    add(task);
    break;
  case "update":
    console.log("updated item");
    break;
  case "delete":
    console.log("deleted item");
    break;
  case "list":
    console.log("list items");
    break;
  case "progress":
    console.log("task in progress or done");
    break;
  case "done":
    console.log("list tasks done");
    break;
  case "progress":
    console.log("list tasks that are not done");
    break;
  case "progress":
    console.log("list tasks in progress");
    break;
  default:
    console.log("Invalid command");
    break;
}
