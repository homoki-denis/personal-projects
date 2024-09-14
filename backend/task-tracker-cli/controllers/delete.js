const fs = require("fs");
const path = require("path");

const tasksPath = path.join(__dirname, "../models/data.json");

const deleted = (id) => {
  let tasks = [];

  if (fs.existsSync(tasksPath)) {
    const fileContent = fs.readFileSync(tasksPath, "utf-8");
    tasks = JSON.parse(fileContent);
  }

  const taskIndex = tasks.findIndex((task) => task.id === parseInt(id));

  if (taskIndex !== -1) {
    tasks.splice(taskIndex, 1);
    fs.writeFileSync(tasksPath, JSON.stringify(tasks, null, 2));
    return true;
  }
  return false;
};

module.exports = deleted;
