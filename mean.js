const mean = function(arr){
    let sum = 0;
    for ( elem of arr ) {
        sum += elem;
    }
    return sum / arr.length;
}

console.log(mean([1,2,3,4,5,6])); // 3.5