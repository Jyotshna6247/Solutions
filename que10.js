// The Coffee Machine: In your coffee shop application, you need to simulate the process of brewing coffee asynchronously. Write an asunc function named brewcoffee that takes the type of coffee and returns a promise.The promise should resolve with a message indication that the coffee is ready after a random delay.

function brewCoffee(coffeeType) {
  return new Promise((resolve) => {
    const delay = Math.floor(Math.random() * 5000) + 1000;

    setTimeout(() => {
      resolve(`${coffeeType} is ready !`);
    }, delay);
  });
}

(async () => {
  try {
    const coffee1 = await brewCoffee("Espresso");
    console.log(coffee1);

    const coffee2 = await brewCoffee("latte");
    console.log(coffee2);

    const coffee3 = await brewCoffee("Cappuccino");
    console.log(coffee3);
  } catch (error) {
    console.error("Error brewing coffee: ", error);
  }
})();
