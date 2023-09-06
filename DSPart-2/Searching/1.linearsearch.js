function linearSearch(array,targets){

    for (let i=0;i<array.length; i++){
        // console.log(array[i]);
        if(array[i]==targets){
            return `Element found at ${i}`
        }
    }
    return "Target not found in Array";


}


const arr = [23,67,87,90,45,60];
const targets = 45;


let rersult = linearSearch(arr,targets);

console.log(rersult);