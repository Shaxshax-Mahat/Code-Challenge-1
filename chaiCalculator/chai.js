// Import the 'prompt-sync' module to allow user input in Node.js
const prompt = require("prompt-sync")();

/**
 * Function to calculate ingredients for making chai
 * @param {number} numberOfCups - The number of cups of chai to make
 */
function calculateChaiIngredients(numberOfCups) {
    // Calculate the quantities of each ingredient
    const water = 200 * numberOfCups; // Water in ml
    const milk = 50 * numberOfCups;  // Milk in ml
    const teaLeaves = numberOfCups; // Tea leaves in tablespoons
    const sugar = 2 * numberOfCups; // Sugar in teaspoons

    // Display the results to the user
    console.log(`To make ${numberOfCups} cups of Kenyan Chai, you will need:`);
    console.log(`Water: ${water} ml`);
    console.log(`Milk: ${milk} ml`);
    console.log(`Tea Leaves (Majani): ${teaLeaves} tablespoons`);
    console.log(`Sugar (Sukari): ${sugar} teaspoons`);
    console.log("\nEnjoy your Chai Bora!");
}

// Prompt the user for the number of chai cups they want to make
const cups = parseInt(prompt("Karibu! How many cups of Chai Bora would you like to make? "), 10);

// Validate input and call the function
if (!isNaN(cups)) {
    calculateChaiIngredients(cups); // Call the function with user input
} else {
    console.log("Please enter a valid number."); // Error message for invalid input
}
