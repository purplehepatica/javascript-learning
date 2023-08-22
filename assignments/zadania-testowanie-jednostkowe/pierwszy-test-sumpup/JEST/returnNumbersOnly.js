function returnNumbersOnly(input) {

    if (typeof input !== "number") {
        return "Not a number!";
    }

    return input;
}

module.exports = returnNumbersOnly;