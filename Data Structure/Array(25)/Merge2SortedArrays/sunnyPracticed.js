
    //7:30 
    let arr1=[1, 5, 9, 10, 15, 20];
    let arr2=[2, 3, 8, 13];
    //traverse from right to left in A2
    for(let i=arr2.length-1;i>=0;i--){
        let temp = arr2[i]
        let last = arr1[arr1.length-1]
        //use insertion sort to 
        let j;
        for(j=arr1.length-2;j>=0 && arr1[j]>temp;j--){
            arr1[j+1]=arr1[j]
        }
        arr1[j+1]=temp;
        arr2[i]=last;
        
    }
    console.log(arr1);
    console.log(arr2);
    
    