const converter = require("metric-unit-converter")

console.log("10 km = ",converter.kmToMiles(10),"miles")
console.log("6.2 miles = ",converter.milesToKm(6.2),"km")

console.log("5 kg = ",converter.kgToPounds(5),"pounds")
console.log("11 pounds = ",converter.poundsToKg(11),"kg")

console.log("100 cm = ",converter.cmToInches(100),"inches")
console.log("39 inches = ",converter.inchesToCm(39),"cm")

console.log("25°C = ",converter.celsiusToFahrenheit(25),"°F")
console.log("77°F = ",converter.fahrenheitToCelsius(77),"°C")
