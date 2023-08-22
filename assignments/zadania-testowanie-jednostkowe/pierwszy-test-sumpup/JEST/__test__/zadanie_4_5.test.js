const calculateBMI = require("../zadanie_4_5.js");

describe("calculateBMI function: ", () => {

    test.each([[50, 1.70], [48, 1.65], [55, 1.75], [52, 1.80], [45, 1.60], [49, 1.68]])("Should return 'Niedowaga' when BMI is less than 18.5", (weight, height) => {
        const bodyState = "Niedowaga"
        const actualValue = calculateBMI(weight, height);

        expect(actualValue).toEqual(bodyState)
    })

    test.each([[70, 1.75], [65, 1.70], [58, 1.65], [80, 1.85], [68, 1.80], [62, 1.68]])("Should return 'Normalna' when BMI is bigger or equal than 18.5 and less or equal than 25", (weight, height) => {
        const bodyState = "Normalna"
        const actualValue = calculateBMI(weight, height);

        expect(actualValue).toEqual(bodyState)
    })

    test.each([[85, 1.70], [90, 1.80], [95, 1.75], [88, 1.65], [80, 1.60], [87, 1.68]])("Should return 'Nadwaga' when BMI is bigger than 25", (weight, height) => {
        const bodyState = "Nadwaga"
        const actualValue = calculateBMI(weight, height);

        expect(actualValue).toEqual(bodyState)
    })
})