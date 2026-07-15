function kmToMiles(km) {
    return (km * 0.621371).toFixed(2)
}

function milesToKm(miles) {
    return (miles / 0.621371).toFixed(2)
}

function metersToFeet(meters) {
    return (meters * 3.28084).toFixed(2)
}

function feetToMeters(feet) {
    return (feet / 3.28084).toFixed(2)
}

function cmToInches(cm) {
    return (cm / 2.54).toFixed(2)
}

function inchesToCm(inches) {
    return (inches * 2.54).toFixed(2)
}

function kgToPounds(kg) {
    return (kg * 2.20462).toFixed(2)
}

function poundsToKg(pounds) {
    return (pounds / 2.20462).toFixed(2);
}

function celsiusToFahrenheit(celsius) {
    return ((celsius * 9 / 5) + 32).toFixed(2)
}

function fahrenheitToCelsius(fahrenheit) {
    return (((fahrenheit-32)*5)/9).toFixed(2)
}

module.exports = {
    kmToMiles,
    milesToKm,
    metersToFeet,
    feetToMeters,
    cmToInches,
    inchesToCm,
    kgToPounds,
    poundsToKg,
    celsiusToFahrenheit,
    fahrenheitToCelsius
}