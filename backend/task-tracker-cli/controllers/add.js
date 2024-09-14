const fs = require("fs");
const path = require("path");

const tasksPath = path.join(__dirname, "../models/data.json");

const tasks = [];

const add = (item) => {
  if (fs.existsSync(tasksPath)) {
    return;
  } else {
    fs.writeFileSync(tasksPath, JSON.stringify(tasks));
  }
  tasks.push(item);
};

module.exports = add;
