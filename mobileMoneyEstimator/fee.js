// Import the 'prompt-sync' module to allow user input in Node.js
const prompt = require("prompt-sync")();

/**
 * Function to estimate mobile money transaction fee
 * @param {number} amountToSend - The amount of money to send
 */
function estimateTransactionFee(amountToSend) {
    const feePercentage = 0.015; // Fee is 1.5% of the transaction amount
    let transactionFee = amountToSend * feePercentage; // Calculate initial fee

    // Apply minimum and maximum fee limits
    if (transactionFee < 10) transactionFee = 10; // Minimum fee is KES 10
    if (transactionFee > 70) transactionFee = 70; // Maximum fee is KES 70

    const totalAmount = amountToSend + transactionFee; // Calculate total amount to be debited

    // Display the fee and total amount to the user
    console.log(`Sending KES ${amountToSend}:`);
    console.log(`Calculated Transaction Fee: KES ${transactionFee}`);
    console.log(`Total amount to be debited: KES ${totalAmount}`);
    console.log("\nSend Money Securely!");
}

// Prompt the user for the amount to send
const amount = parseFloat(prompt("Unatuma Ngapi? (KES): "));

// Validate input and call the function
if (!isNaN(amount)) {
    estimateTransactionFee(amount); // Call the function with user input
} else {
    console.log("Please enter a valid amount."); // Error message for invalid input
}
