function calculateBMI() {
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;

    if (weight > 0 && height > 0) {
        var bmi = weight / ((height / 100) ** 2);
        var result = document.getElementById('result');

        if (bmi < 18.5) {
            result.textContent = 'Your BMI is ' + bmi.toFixed(2) + ' (Underweight)';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            result.textContent = 'Your BMI is ' + bmi.toFixed(2) + ' (Normal weight)';
        } else if (bmi >= 25 && bmi < 29.9) {
            result.textContent = 'Your BMI is ' + bmi.toFixed(2) + ' (Overweight)';
        } else {
            result.textContent = 'Your BMI is ' + bmi.toFixed(2) + ' (Obesity)';
        }
    } else {
        alert("Please enter valid weight and height!");
    }
}