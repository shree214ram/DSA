<script>
    //9:50 //10;4 //10:9
    const A = [33, 78, 9, 2, 78, 11, 1]
    mergeSort(A,0,A.length-1)
            console.log(A,"result")

    //1. merge func
    function merge(A,left,mid,right){
        //make temp array
        const B = []
        let i= left;
        let k= left;
        let j = mid+1;

        //make left and right array
        const L = []
        const R = []
        for(let i=left;i<=mid-left+1;i++){
            L[i]=A[i]
        }
        for(let j=mid+1;j<=right-mid;j++){
            R[j]=A[j]
        }
        //check both
        while(i<=mid&&j<=right){//1
            if(A[i]<=A[j]){//2
                B[k]=L[i]
                i++
            }else{
                B[k]=R[j]
                j++
            }
            k++
        }
        //remining in
        if(i>mid){
            while(j<=right){//3
                B[k]=R[j]
                j++
                k++
            }
        }else{
            while(i<=mid){//4
                B[k]=L[i]
                i++
                k++
            }
        }
        
        //convert temp to orignal 
        for(let m=0;m<B.length;m++){
            A[m]=B[m]
        }
    }


    //2. 
    function mergeSort(A,left,right){
    if(left<right){
        let mid = (left+right)/2;
        mergeSort(A,left,mid);    	      		
        mergeSort(A,mid+1,right);
        merge(A,left,mid,right);
        }
        return
    }
    
    </script>