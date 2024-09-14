#!/usr/bin/env node
const add = require("./controllers/add");
const update = require("./controllers/update");
const deleted = require("./controllers/delete");

const args = process.argv.slice(2);

const command = args[0];

const task = args.slice(1).join(" ");
const id = args[1];

switch (command) {
  case "add":
    add(task);
    break;
  case "update":
    const newDescription = args[2];
    update(id, newDescription);
    break;
  case "deleted":
    deleted(id);
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
