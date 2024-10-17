// The Mirror Mirror:Imagine you have a string, and you need to create a new string that is a mirror image of the original, write a function that appends the reversed version of the original string to itself.

function mirrorString(str){
    const reversedStr = str.split('').reverse().join('');
    return str +" "+ reversedStr;
}

const originalString = "Welcome"

const mirrored_String = mirrorString(originalString);

console.log(mirrored_String);

