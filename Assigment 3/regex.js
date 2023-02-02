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

// Question Seven

const arr = [1,2,3,1,8,21,9,3,4,2];
sortedArrayAsc = [...arr];
sortedArrayDesc = [...arr];
sortedArrayAsc.sort();
sortedArrayDesc.sort((a,b)=> b - a);
console.log(sortedArrayAsc) 
console.log(sortedArrayDesc)


// question eight 

const validate = _ => {
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let pass = document.querySelector("#pass").value;
    let dob = document.querySelector("#dob").value;
    let card = document.querySelector("#card").value;
    const nameRegex = /\s/gi;
    let emailRegex = /^[^\d\W]\w*\d*\.*(\W|\w)*@\w+\d*\.\w+/gi;
    let passRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/gi;
    let dobRegex = /(0[1-9]|1[012]).(0[1-9]|1[0-9]|2[0-9]|3[01]).([19]{2})?([1-9]{2})/gi;
    let cardRegex = /^[0-9]{5}-[0-9]{7}-[0-9]{1}/gi;
    if(name.match(nameRegex)){
        alert('Name must not contain spaces')
        return;
    }
    if(!email.match(emailRegex)){
        alert("Please Enter Valid Email");
        return;
    }
    if(!pass.match(passRegex)){
        alert("Password must contain upperletter small letter and numbers");
        return;
    }
    if(!dob.match(dobRegex)){
        alert(dob.match(dobRegex))
        alert("Date of birth not valid");
        return;
    }
    if(!card.match(cardRegex)){
        alert("Card is not valid")
        return;
    }
    alert("Succesffully Registered")

}

// document.querySelector("#submitBtn").addEventListener('click', validate)

// Question Nine

let myName = ["Amir" , "aMir", "amIr", "amiR", "AMIR"];

let myNameRegex = /amir/gi;
console.log(myName.join("").match(myNameRegex))


let string = "I am Amir"

let nameRegex = /(ir)$/gi;
console.log(string.match(nameRegex))