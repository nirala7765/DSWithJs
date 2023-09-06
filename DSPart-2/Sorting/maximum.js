function max(array){
    let max=array[0];
    for(let i=0; i<array.length; i++){
        if(max<array[i]){
            max = array[i];
        }


    }

    return max;
}

const arr=[200,7,8,0,89,36,78,-36];

let Result = max(arr);

console.log(Result);