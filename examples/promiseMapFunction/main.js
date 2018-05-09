var promise = require("bluebird")

var arr = [1, 2, 3]

function wait() {
    var startTime = new Date().getTime();
    while (new Date().getTime() - startTime < 1000) {
        // wait and do nothing
    }
}

/*
map using default
 */

console.time('blocking');
arr.map((item) => {
    wait()
    console.log(item + " * 2" + " = " + (item * 2))
})
console.timeEnd("blocking")

console.time("nonblocking")
promise.map(arr, (item) => {
    wait()
    console.log(item + " * 2" + " = " + (item * 2))
})
console.timeEnd("nonblocking")