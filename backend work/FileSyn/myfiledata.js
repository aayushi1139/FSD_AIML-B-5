const fs = require('fs');

function myWriteFile() {
    try {
        fs.writeFileSync("data.txt", "Data is written by node");
        console.log("Data written successfully");
    } catch (err) {
        console.log("Error in writing data: " + err);
    }
}

function myReadFile() {
    try {
        console.log("Before reading");
        const rd = fs.readFileSync("data.txt", { encoding: 'utf-8' });
        console.log(rd.toString());
        console.log("After reading");
    } catch (err) {
        console.log("Error in reading data: " + err);
    }
}

function myAppendFile() {
    try {
        console.log("Before append");
        fs.appendFileSync("data.txt", "appended data by fs module");
        console.log("After append");
    } catch (err) {
        console.log("Error in appending data: " + err);
    }
}

function myDeleteFile() {
    try {
        fs.unlinkSync("data.txt");
        console.log("File deleted");
    } catch (err) {
        console.log("Error in deleting file: " + err);
    }
}

const obj = { myWriteFile, myReadFile, myAppendFile, myDeleteFile };
module.exports = obj;
