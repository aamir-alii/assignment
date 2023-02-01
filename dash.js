const dashTwixt2Evens = number => {
    let res = ""
    let strNumber = number.toString()
    let i=0;
    for( i=0; i < strNumber.length-1; i++){
        if(strNumber[i] % 2 === 0 && strNumber[i+1] % 2 === 0) {
            res += strNumber[i];
            res += '-';
        }
        else {
            res += strNumber[i];
        }
    }
    res += strNumber[i];
    return res;
}
console.log(dashTwixt2Evens(22228))