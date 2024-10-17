//The vowel Counter: You need to create a function that counts the number of vowels in a given string,consider both uppercase and lowercase vowels.

function countVowels(str){
    const vowels = /[aeiou]/gi;
  
    const matches =str.match(vowels);

    return matches ? matches.length : 0;
}

let string = 'I love you.'
console.log(countVowels(string))