const fs = require("fs")
const request = require("request")

var totalbytes

var req = request.get("https://i.imgur.com/5LZgpUg.jpg")
console.time("download")

req.on("error", (err) => {
    console.log("Download error")
}).on("response", (res) => {
    totalbytes = parseInt(res.headers['content-length'], 10)
    console.log("Download responce, totalbytes " + totalbytes)
})

req.pipe(fs.createWriteStream("demo.jpg")).on("finish", () => {
    console.timeEnd("download")
    console.log("Download done write to file")
}).on("error", () => {
    console.log("Download write to file error")
})