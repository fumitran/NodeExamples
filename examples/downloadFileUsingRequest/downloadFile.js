const fs = require("fs")
const request = require("request")

module.exports.downloadFileByUrl = function(url, newFilename) {
    var req = request.get(url)

    req.on("error", (err) => {
        console.log("Download error")
    }).on("response", (res) => {
        totalbytes = parseInt(res.headers['content-length'], 10)
        console.log("Download responce, totalbytes " + totalbytes)
    }).pipe(fs.createWriteStream(newFilename)).on("finish", () => {
        console.log("Download done write to file")
    }).on("error", () => {
        console.log("Download write to file error")
    })
}