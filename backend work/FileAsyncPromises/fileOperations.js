const fs = require('fs').promises;
const promise = fs.writeFile("data.txt", "Hello writing data through fs promises module", { encoding: "utf-8" });
promise.then(() => {
    console.log("Data written successfully!");
  }).catch(err => {
    console.log("Error: " + err);
  }).finally(msg=>{console.log("Write operation completed.");
  });
const prom = fs.readFile("data.txt", { encoding: "utf-8" });
prom.then((data) => {
    console.log("Data read successfully:");
    console.log(data);
  }).catch(err => {
    console.log("Error: " + err);
  }).finally(() => {
    console.log("Read operation completed.");
  });
