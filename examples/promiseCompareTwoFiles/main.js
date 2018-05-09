/**
 * Fumitran read 2 files and compare content of them
 */
var promise = require("bluebird")
var fs = require("fs")
var readFileAsync = promise.promisify(fs.readFile)

promise.resolve().then(() => {
    return [readFileAsync("file1.txt", "utf-8"), readFileAsync("file1-copy.txt", "utf-8")]
}).spread((fileData1, fileData2) => {
    if (fileData1 === fileData2) {
        console.log("File matched")
    } else {
        console.log("File not matched")
    }
})