// The Asynchronous Shopper: Imagine you are building an online shopping application. Write an asynchronous function called placeOrder that simulates placing an order and returns a promise.The promise should resolve with an order confirmation message after a random delay.


async function placeOrder(item) {
    return new Promise((resolve) =>{
        const delay = Math.floor(Math.random() * 3000) + 1000;

        setTimeout(() => {
            resolve (`Order placed for ${item}. Confirmation will be sent shortly.`)
        }, delay);
    })
}

placeOrder('iPhone').then((confirmation) =>{
    console.log(confirmation);
})