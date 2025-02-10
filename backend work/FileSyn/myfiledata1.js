const fs = require('fs');

const fileOperations = {
    writeData: function (filename, data) {
        try {
            fs.writeFileSync(filename, data);
            console.log("Data written successfully");
        } catch (err) {
            console.log("Error in writing data: " + err);
        }
    },

    readData: function (filename) {
        try {
            console.log("Before reading");
            const rd = fs.readFileSync(filename, { encoding: 'utf-8' });
            console.log(rd.toString());
            console.log("After reading");
        } catch (err) {
            console.log("Error in reading data: " + err);
        }
    },

    appendData: function (filename, data) {
        try {
            console.log("Before append");
            fs.appendFileSync(filename, data);
            console.log("After append");
        } catch (err) {
            console.log("Error in appending data: " + err);
        }
    },

    deleteFile: function (filename) {
        try {
            fs.unlinkSync(filename);
            console.log("File deleted");
        } catch (err) {
            console.log("Error in deleting file: " + err);
        }
    }
};

module.exports = fileOperations;
