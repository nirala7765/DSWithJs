function BinarySearch(array,Target){

    let start =0;
    let End = array.length-1;

    while(start<=End){
        const mid = Math.floor((start+End)/2);
        // const mid = (start+End)/2   //It will no work 

        if(array[mid]==Target){
            return `${Target} found at Index ${mid}`;
        }
        else if(array[mid]<Target){
            start=mid+1;

        }else{
            End = mid-1;

        }



    }

    return 'Target not found at Any Index';


}


const arr = [10,20,30,40,50,60,70,80,90,100];

const target =90;

let result = BinarySearch(arr,target);

console.log(result);

