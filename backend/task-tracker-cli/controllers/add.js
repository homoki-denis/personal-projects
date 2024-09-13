const fs = require("fs");

const tasks = "../models/example.json";

const add = (item) => {
  console.log(`Item added: ${tasks}`);
};

module.exports = add;
