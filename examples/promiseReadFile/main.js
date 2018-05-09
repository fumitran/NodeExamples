var fs = require("fs")
var promise = require("bluebird")

console.time("demo-convert-read-function")

var readFileAsync = promise.promisify(fs.readFile)

console.timeEnd("demo-convert-read-function")

readFileAsync("data.json").then(JSON.parse).then((json) => {
    console.log(json)
}).catch(SyntaxError, (e) => {
    console.error("invalid json in file", e.message)
}).catch((e) => {
    console.error("unable to read file", e.message)
})