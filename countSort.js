const countSort = (arr, min, max) => {
    let map = {};
    for( num of arr ){
        if(!map[num]){
            map[num] = 1;
        }else{

            map[num]++;
        }
    }

    let arr1 = [];
    for(let i=min ; i<=max;i++){
        while(map[i]){
            arr1.push(i);
            map[i]--;
        }
    }
    return arr1;
}

console.log(countSort([2,4,1,3,1,2,6,4],1,6));