const fs = require("fs");
const path = require("path");

export default (req, res) => {
  let data = JSON.parse(fs.readFileSync(path.resolve("./pages/api/testcards.json")));

  res.send(data);
};
