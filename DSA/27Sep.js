function convertKilometersToMiles(kilometers) {
    // 1 kilometer is approximately 0.621371 miles
    const miles = kilometers * 0.621371;
    return miles;
}

const kilometers = 10; // Replace with the value you want to convert
const miles = convertKilometersToMiles(kilometers);

console.log(kilometers + " kilometers is equal to " + miles + " miles");