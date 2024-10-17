// Async Array Mapping: Write an asynchronous function that takes an array of numbers and returns a new array of Promises where each number is multiplied by 2 after a delay of 500 milliseconds.



async function  multiplyBYTwo(numbers) {
    return Promise.all(numbers.map(async (num)=>{
        return new Promise((resolve) =>{
            setTimeout(() => {
                resolve (num * 2)
            }, 500);
        });
    }));

}

const number = [1,2,4,6,7,8,10];

multiplyBYTwo(number) .then(result =>{
    console.log(result);
});