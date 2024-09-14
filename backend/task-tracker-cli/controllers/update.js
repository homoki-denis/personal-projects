const fs = require("fs");
const path = require("path");

const tasksPath = path.join(__dirname, "../models/data.json");

const update = (id, newDescription) => {
  let tasks = [];

  if (fs.existsSync(tasksPath)) {
    const fileContent = fs.readFileSync(tasksPath, "utf-8");
    tasks = JSON.parse(fileContent);
  }

  const taskIndex = tasks.findIndex((task) => task.id === parseInt(id));

  if (taskIndex === -1) {
    console.log("Task not found");
  }

  tasks[taskIndex].description = newDescription;
  tasks[taskIndex].updatedAt = new Date().toISOString();

  fs.writeFileSync(tasksPath, JSON.stringify(tasks));
  console.log(`Task (ID: ${id}) updated successfully`);
};

module.exports = update;
