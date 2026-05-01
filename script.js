function convertTemp() {
    let temp = document.getElementById("tempInput").value;
    let unit = document.getElementById("unit").value;
    let result = document.getElementById("result");

    // VALIDATION
    if (temp === "" || isNaN(temp)) {
        result.innerText = "Please enter a valid number!";
        return;
    }

    temp = parseFloat(temp);

    let c, f, k;

    if (unit === "c") {
        // Celsius to others
        f = (temp * 9/5) + 32;
        k = temp + 273.15;
        result.innerText = `Fahrenheit: ${f.toFixed(2)} °F | Kelvin: ${k.toFixed(2)} K`;
    } 
    else if (unit === "f") {
        // Fahrenheit to others
        c = (temp - 32) * 5/9;
        k = c + 273.15;
        result.innerText = `Celsius: ${c.toFixed(2)} °C | Kelvin: ${k.toFixed(2)} K`;
    } 
    else {
        // Kelvin to others
        c = temp - 273.15;
        f = (c * 9/5) + 32;
        result.innerText = `Celsius: ${c.toFixed(2)} °C | Fahrenheit: ${f.toFixed(2)} °F`;
    }
}