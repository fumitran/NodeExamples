var fs = require("fs")
var promise = require("bluebird")
var downloadFileByUrl = require("../downloadFileUsingRequest/downloadFile").downloadFileByUrl

var downloadFileByUrlPromise = function(url, newFileName) {
    return new Promise((fulfill, reject) => {
        downloadFileByUrl(url, newFileName)
    })
}

console.time("convert promise get link")
var getlink = promise.promisify(downloadFileByUrlPromise)
console.timeEnd("convert promise get link")

getlink("https://i.imgur.com/5LZgpUg.jpg", "demo.jpg").then((result) => {
    console.log(result)
}).catch((e) => {
    console.error("error when download file", e.message)
})