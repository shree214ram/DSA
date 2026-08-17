/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var smallestRange = function(nums) {
    /*
         sorted list then min Heap of k that thing is coming in mind but 



         1    2     3
         1    2     3 
         1    2     3


        [
         [4,10,15,24,26],
         [0,9,12,20],
         [5,18,22,30]
        ]

                        4,0,5 
                        min =0
                        max=5 

                        range=max-min = 5-0=5 

                        4,0,18 = diff =18 which is so big range 

                        k for loop and k ength minHeap we will have on top very minimum and on tail very maximum so we will found the range and then 
                        we will compare the gobal range variable with min,max also we will store so whch even will be minium range we will print the min and max 

                        k for loop ittration time complaxity + log n for Min Heap 
                        minRange , min,max 3 verable will take some space
     

                        i am thinking to maintain one object in minHeap 
                        {min,max,range} and we will mantan the minHeap on behalf of min range in assending order .

                        And when new element would come let say 

                        4,0,5 are three elements and min=0,max=5 and range =5 

                        so in next element 
                        4,0,18 we will check whichevern max in last 
                                0

                             4     5   and we have to insert 18 we will check 18 is less than very first 0 , No then we would avoid 

                             next 22 which is also not less then  0 then avoid 

                             No this think will not work because we would avoid the 20 to be set as min and max 23 if we would direct compare with elements like 0 or 5 

                             we need to think in terms of Range 

                             fst we will drect insert 3 combination lke 

                            [4,0,5] [min:0,max:5,range:5]   
                    /                                \
     [4,0,18]  [min:0,max:18,range:18]            [4,0,22]  [min:0,max:22,range:22]      

    next elemet is 30 so we will check if the mod diff 0-30 which is 30 is less then first range like 5 which is No so we will not change in Min Heap 

    [4,9,5] [min:4,max:9:range:5 ] which is already equal on top 5 so we will avoide 
    [4,9,18] [min:4,max:18:range:12 ] which is not lower than top 5 so we will avoide 

    */
};