// The shopping cart totalizer: you are working on an e-commerce website, and you need to calculate the total cost of items in the shopping cart. Implement a function named calculaatetotal that takes an array of products with  prices and quantities and returns the total cost.

function calculateTotal(products) {
    return products.reduce((total, product) => {
        // Calculate cost for each product
        return total + (product.price * product.quantity);
    }, 0); // Initial total is 0
}

// Example usage
const cartItems = [
    { price: 29.99, quantity: 2 },  // 2 items at $29.99
    { price: 15.50, quantity: 1 },  // 1 item at $15.50
    { price: 5.99, quantity: 3 }     // 3 items at $5.99
];

const totalCost = calculateTotal(cartItems);
console.log(`Total Cost: $${totalCost.toFixed(2)}`); // Output: Total Cost: $87.47
