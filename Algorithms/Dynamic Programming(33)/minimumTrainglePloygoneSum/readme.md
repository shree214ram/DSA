 
   a, b, c , d, e 


                c    
           b 
                     d

                    
                    
                    e
            a

    if(A.length>3) return 0
   if A.length==3 return a*b*c
    =====
        a      b

            c

    for(i=0;i<n-2;)

    start point a , a->b(next)  , [Remaining element is c ]

    ====


     a      b

      d      c

    for(i=0;i<n-2;)

    start point a , a->b(next)  , [Remaining element is c,d ]


    n=4 , Traingle would be n-2 =2 , 
    for(all the elements)

    current index like at "a" then it can connect to next element which is next index "b" 
    so it can connect to remaning elements like next remainings elements like c,d 

    // he told we will chose one by one edges in Clock wise and 


    ====

    a , b , c, d, e

    ab=[c,d,e]
    bc=[c,d,e]

    index 0 

    if(index>A.ength) return 

    if(index==A.length-1){
        //
        next index would be 0 means // ea
    }


    if we choose current edge and one reminaing then 