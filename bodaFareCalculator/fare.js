// Import the 'prompt-sync' module to allow user input in Node.js
const prompt = require("prompt-sync")();

/**
 * Function to calculate the fare for a boda boda ride
 * @param {number} distanceInKm - The distance of the trip in kilometers
 */
function calculateBodaFare(distanceInKm) {
    const baseFare = 50; // Base fare for all rides
    const chargePerKm = 15; // Fare per kilometer
    const totalFare = baseFare + (distanceInKm * chargePerKm); // Calculate total fare

    // Display the fare breakdown to the user
    console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
    console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
    console.log(`Mpaka Uko: KES ${distanceInKm * chargePerKm}`);
    console.log(`Total: KES ${totalFare}`);
    console.log("\nPanda Pikipiki!");
}

// Prompt the user for the distance of the trip
const distance = parseFloat(prompt("Unafika wapi Mkubwa? Kilometer ngapi? "));

// Validate input and call the function
if (!isNaN(distance)) {
    calculateBodaFare(distance); // Call the function with user input
} else {
    console.log("Please enter a valid number."); // Error message for invalid input
}
