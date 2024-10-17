// The sum Selector; you are working on a function that should sum all numbers in an array until it encounters a negative number.write a function that performs this summation.

function sumUntilNegative(arr){
    let sum =0;
    for (const num of arr) {
        if(num < 0){
            break;
        }
        sum += num;
    }
    return sum;
}

const number = [1,2,3,5,6,8,9,-11,13]

const result = sumUntilNegative(number)
console.log(result)