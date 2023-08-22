function calculateBMI(weight, height) {
	const BMI = weight / (height ** 2);

	if (BMI < 18.5) {
    	return "Niedowaga"
	}
	else if (BMI > 25) {
    	return "Nadwaga"
	}
	return "Normalna"
}

module.exports = calculateBMI;