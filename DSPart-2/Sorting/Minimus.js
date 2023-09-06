function MinimumElement(array){

    let Minimum=array[0];
    for(let i =0;i<array.length; i++){
        if(Minimum>array[i]){
            Minimum=array[i];
        }
    }

    return Minimum;

}


const arr=[2,7,8,0,89,36,78,-36];

let Result = MinimumElement(arr);

console.log(Result);