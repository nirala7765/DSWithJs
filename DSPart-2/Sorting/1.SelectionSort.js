function SelectionSort(array){
    for(let i=0; i<array.length-1;i++){
        let miniIndex = i;

        for (let j=i+1; j<array.length; j++){
            if(array[miniIndex]>array[j]){
                miniIndex=j;

            }

            
        }

            let temp =array[i];
            array[i]=array[miniIndex];
            array[miniIndex]=temp;

    }
}


  


const arr=[78,26,3,98,-5,96,-100,56];

SelectionSort(arr);
console.log(arr);