function convertTemperature() {
    const celsiusInput = document.getElementById('celsiusInput').value;
    const resultElement = document.getElementById('result');

    if (!celsiusInput) {
        resultElement.textContent = 'Please enter a temperature in Celsius.';
        return;
    }

    const celsius = parseFloat(celsiusInput);
    if (isNaN(celsius)) {
        resultElement.textContent = 'Invalid input. Please enter a valid number.';
        return;
    }

    const fahrenheit = (celsius * 9/5) + 32;
    resultElement.textContent = `Temperature in Fahrenheit: ${fahrenheit.toFixed(2)}°F`;
}
