const normalString = 'I am learing web development with Mr. Jhankar Mahbub vai!!!';

// for (const letter of normalString) {
//     console.log(letter);
// }

function reverseString(text) {
    let reverse = '';
    for (const letter of text) {
        reverse = letter + reverse;
    }
    return reverse;
}

const reversedString = reverseString(normalString);
console.log(reversedString);