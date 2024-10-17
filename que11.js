// The Array Filterer: You are building a search feature for your e-commerce site.Write a function named filterProducts that takes an array of product objects and a filter criterion. The function should return a new array containing only the products that match the filter criterion.

function filterProducts(products,criterion){
    return products.filter(product =>{
        return Object.keys(criterion).every(key =>{
            if(Array.isArray(criterion[key])){
                return criterion[key].includes(product[key])
            }
            return product[key] == criterion[key];
        });
    });
}

const products = [
    { id: 1, name: "T-shirt", category: "Clothing", price: 200 },
    { id: 2, name: "Jeans", category: "Clothing", price: 400 },
    { id: 3, name: "iPhone", category: "electronics", price: 600000 },
    { id: 4, name: "laptop", category: "electronics", price: 10000 },
];

const criterion = {
    category: "electronics"

}
const output = filterProducts(products,criterion);
console.log(output)