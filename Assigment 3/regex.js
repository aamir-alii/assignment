// Question One
const sentance = "A quick brown fox jumps over the lazy dog";
let regex = /[aeiou]/ig;
const numberOfVowels = sentance.match(regex).length;
console.log(numberOfVowels)

// Questio Two

const s1 = "I am currently working with a prestigious company";
regex = /^[A-Z]/;
s1.match(regex) ? console.log("True") : console.log("false");

// Question Three

let creditCardNumber = '9078 1234 9883 8732'
regex = /^((\d{4})(?:[\s]?)){4}$/g  // will accept only 16 digits
console.log(creditCardNumber.match(regex))

// Question Four

let s2 = "U6rvhAerPWlGb3K6bUUU6rvhA2erP12WlGbKU6rvhAerPW46lGbKb8UUoJsbUUo7JsoJs";
regex = /[a-z]/gi;
console.log( s2.match(regex).length)

// Question Five
let email = "aamirali@gmail"
regex = /^[^\d\W]\w*\d*\W*@\w+\d*\.\w+/gi
email.match(regex) ? console.log("True") : console.log("false") // false;

// Question Six:
personalInfo = "2624 Burton Avenue"
regex = /(^[^.,]([a-z\s0-9!#$%&'*+-/=?^_`\{|\}~]*))([.,]?)\b/gi
console.log(personalInfo.match(regex))