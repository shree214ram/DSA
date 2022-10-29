https://www.geeksforgeeks.org/policemen-catch-thieves/

1. ### Navie Approach :- we may have to see all the possible scenarios that may take exponanatials time compaxity
2. ### We can think for "Greedy method" : it may take less time compaxity bot there are some case where it may fail like 
        Like we can take either nearest theif 
        ##### “For each policeman from the left catch the nearest possible thief.” 
        it will fail in case of example 2 

        ##### “For each policeman from the left catch the farthest possible thief” 
        this will work for exaple 2 but it will fail for example 3



        Input : arr[] = {'P', 'T', 'T', 'P', 'T'},
                    k = 1.
        Output : 2.
        Here maximum 2 thieves can be caught, first
        policeman catches first thief and second police-
        man can catch either second or third thief.

        Input : arr[] = {'T', 'T', 'P', 'P', 'T', 'P'}, 
                    k = 2.
        Output : 3.

        Input : arr[] = {'P', 'T', 'P', 'T', 'T', 'P'},
                    k = 3.
        Output : 3.

3. ### we can think for Allotment difference with hash map O(N),O(N)
    1. staore all theif indexes in theifArray O(N)
    2. staore all polish indexes in polishArray O(N)
    if( | theifArray(theifIndex)-polishArray(polishIndex) | <= k ){
        answer++
        theifIndex++
        polishIndex++
    }
    3. Jo chota ho uski index value increment 
    if(theifArray(theifIndex) < polishArray(polishIndex)){
        theifIndex++
    } else {
        polishIndex++
    }

4. ### we can think for Allotment difference without Hash map O(N),O(1) 

