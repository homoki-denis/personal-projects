const fs = require("fs");
const path = require("path");

const tasksPath = path.join(__dirname, "../models/data.json");

const add = (item) => {
  let tasks = [];

  try {
    if (fs.existsSync(tasksPath)) {
      const fileContent = fs.readFileSync(tasksPath, "utf-8");
      tasks = JSON.parse(fileContent);
    }
  } catch (error) {
    throw new Error(error);
  }

  const newTask = {
    id: tasks.length + 1,
    description: item,
    status: "pending",
    createdAt: new Date().toISOString(),
    updatedAt: "",
  };

  tasks.push(newTask);
  fs.writeFileSync(tasksPath, JSON.stringify(tasks));
  console.log(`Task added successfully (ID: ${newTask.id})`);
};

module.exports = add;
