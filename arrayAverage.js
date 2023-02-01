const arrayAverage = arr => {
    let sum = 0;
    for (elem of arr) {
        sum += elem;
    }
    return sum/arr.length;
}