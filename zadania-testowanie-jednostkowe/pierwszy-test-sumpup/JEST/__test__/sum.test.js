const sum = require("../sum.js");

test("sum: should return a sum of two numbers", () => {
    const expectedResult = 6;
    const firstValue = 2;
    const secondValue = 4;
    const actualResult = sum(firstValue, secondValue);

    expect(actualResult).toEqual(expectedResult);
});