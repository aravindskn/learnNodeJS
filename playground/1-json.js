const fs = require("fs");

const buffer = fs.readFileSync("1-json.json");
const bufferString = buffer.toString();
const data = JSON.parse(bufferString);

console.log(data);

data.name = "Aravind";
data.age = 23;

const dataString = JSON.stringify(data);
fs.writeFileSync("1-json.json", dataString);
