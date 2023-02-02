const createBase = number => {
    return this.addSix = number2 => number + number2;
}

let addSix = createBase(6);
console.log(addSix(10)) // 16
console.log(addSix(21)) // 27