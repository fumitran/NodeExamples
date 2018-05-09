var Promise = require("bluebird")

var addSync = function(a, b) {
    if (isNaN(a) || isNaN(b)) {
        throw new Error("Invalid input number")
    }

    return a + b
}

var addAsync = function(a, b, callback) {
    if (isNaN(a) || isNaN(b)) {
        return callback(new Error("Invalid input number"))
    }
    return callback(null, a + b)
}

var add = function(a, b) {
    return new Promise((fulfill, reject) => {
        try {
            fulfill(addSync(a, b))
        } catch (e) {
            reject(e)
        }
    })
}

add(1, 2).then((result) => {
    console.log(result)
}).catch((err) => {
    console.error("Error on add ", err.message)
})