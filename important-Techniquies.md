######## Hashing ###########
1. Two Sum whose sum is equal to target
    1.  let temp = targetSum - myArray[i]
    2. if(hashObj.contains(temp)){
            parisOfTwoSum.push(temp+","+myArray[i])
        } else {
            hashObj.add(myArray[i])
        }
2. Three Sum whose sum is equal to target
    1.  let first = myArray[i] for i=0
    2.  let second = myArray[j] for j=i+1
    3.  let temp = targetSum - (first+second)
    4. if(hashObj.contains(temp)){
            parisOfTwoSum.push(temp+","+first+","+second)
        } else {
            hashObj.add(myArray[j])
        }
3. Find Longest Sub array whose sum is equal to target 
    1. currentSum == Target {maxLength=Math.max(maxLength,i+1)} , 
    2. if( hash.get( currentSum - Target )) {
        maxLength=Math.max(maxLength,i-get(currentSum - Target))
        // (currentSum - Target) isliye kyonki hash map me is key par us time ka i index store liya tha 
    }                                                                            |       
                                                                                 |
                                                             |-------------------|                   
    3. if( ! hash.has( currentSum )  )  {set((currentSum), i)} 
6. Longest subarray with sum divisible by K :-
    1. prepare currentSum +=A[i] 
    2. prepare modArray by modArray[i] = ((currentSum % k) + k) % k
    3. if(modArray[i] == 0 ){
         maxLength = i+1
        }else if(!Hash.has(modArray[i])){
            Hash.set(modArray[i],i)
        }else {
            maxLength = Math.max(maxLength, i-Hash.get(modArray[i]))
        }
7. https://www.geeksforgeeks.org/count-ways-to-split-a-binary-string-into-three-substrings-having-equal-count-of-zeros/

    1. prepare currentSum +=1   if S[i] 0 
		// Increment count if 0 appears
		sum += (s[i] == '0') ? 1 : 0;

	2. Increment result if sum equal to
		// 2*k and k exists in mp
		if (sum == 2 * k && mp.has(k) && i < s.length - 1 && i > 0)
		{
			res += mp.get(k);
		}
		
	3. Insert sum in mp
		if(mp.has(sum))
			mp.set(sum, mp.get(sum)+1)
		else
			mp.set(sum, 1);
	}
	
	4. Return result
	return res;

4. Count no of sub array whose sum is equal to target
    1. if(currentSum == Target) 
        {res++} , 
    2. if( hash.has(currentSum - Target) ) 
        {res +=  get(currentSum - Target) }  
    3. if( hash.has(currentSum) ) 
        {set((currentSum), get(currentSum)+1) } 
       else 
        {set((currentSum), 1)} 

5. Longest consecutive 
    1. Longest consecutive sub array 
    ### Agar current element se chota koi nahi ho to use first element samajh kar age ek ek index 
    badate jao jab tak ki A[i+1] hash tableme mojud ho { currentLength +1} and maxLength bhi update 
    kar lo is currentLength se 
    
        1. add all in hash table 
        2. maximumLength = Number.MIN_VALUE
        2. for (let i=0){ 
            1. current = A[i], currentLength = 1
            2. if current-1 not present in hash table means we can start from here 
            3. while (hash.get(A[i]+1)){currentLength++}
            4. maximumLength = Math.max(maximumLength,currentLength)
    1. Longest consecutive sub Sequencing array 
        1. add all in hash table 
        2. maximumLength = Number.MIN_VALUE
        2. for (let i=0){ 
            1. let current = A[i], currentLength = 1
            2. if current-1 not present in hash table means we can start from here 
            3. while (hash.get(current+1)){
                currentLength++
                current = current+1
                }
            3. OR 
                 let j=i;
                while(hash.has(arr[j]+1)){
                    currentLength += 1
                    j++
                }
            4. maximumLength = Math.max(maximumLength,currentLength)

######## Heap ###########
1. Kth Smallest in array (Max Heap)
    1. Add k element in Max Heap
    2. keep adding in max Heap if new elemnt is smaller than top element 
    3. in last k smaller values will  be there 
    4. print maxHeap[0]
2. Kth Largest in array  (Min Heap)
    1. Add k element in Min Heap
    2. keep adding in min Heap if new elemnt is greater than top element 
    3. in last k greater values will  be there 
    4. print minHeap[0]
3. Minimum product of k integer (Max Heap) 
    1. Add k element in max Heap
    2. keep adding in max Heap if new elemnt is smaller than top element 
    3. in last k smaller values will  be there 
    4. multiply them 
4. Minimum Room for multiple metings (Min Heap)
    1. sort the array as per start time 
    2. Add first element's end time in min Heap
    2. keep removing top element in min Heap if new elemnt's start time  is greater than top element 
    2. keep adding in min Heap current element end time 
    3. in last print the length of min heap remaining elements that will be the maximum room used for that meetings 
4. Merge K sorted arrays 
5. find minimum range from K sorted arrays 
6. convert bst to min heap
7. check bt is Heap



######## Tree ###########

## Generic Tree ##
1. find min path sum in  tree 

## Binary Tree ##
1. Print Level Order traversing 
2. Print Left View Of Tree 
3. Print Right View Of Tree 
4. Print Height of tree 
5. find max path sum in binary tree 

## Binary Search Tree ##
1. BT to BST
2. Check BT is BST Or not ? 
3. Check BST contains dead end 
4. Print Height of tree 
5. find max path sum in binary tree 

######## Greedy Method  ###########
1. minimum room (Min Heap + Greedy):- 
    1. sort via start time {agar next ane wala meeting ka start time agar purane ke end time se bada Ya Barabar he to Hum usi room me 
    meeting kar sakte he } (Min Heap Ka use karenge )
    2. print the min heap size that will be the Minimum Room Required 
2. minimum platform (Min Heap + Greedy):- 
    1. sort via start Arrival time {agar next ane wala train ka start time agar purane ke Departure time se bada Ya Barabar he to 
    Hum usi platform me train ko Ruka sakte he } (Min Heap Ka use karenge )
    2. print the min heap size that will be the Minimum Platform Required 
3. Maximum Activity selection  (No Heap Only Greedy):-
    1. sort via end time {jitni jaldi first activity end hogi utni jaldi hum dusri activity shuru kar payenge}
4. Maximum Profit As per deadlines given{Job Sequencing Problem}  (Via GreedyMethod ) O(N*N) Time Complexity: O(N2):-
    1. sort via Profit .
    2. choose max profit and setup them their Deadline day 
    3. If max profitable Job Deadline day is already filledup than find laser deadline day and setup their    
    Maximum Profit As per deadlines given{Job Sequencing Problem}  (Via Max Heap ) O(N) Time Complexity: O(N):-
    1. sort via Deadline .
    2. choose max Deadline in Max Heap 
    3. slot_Available = if(i>0) ? current element (deadline)  - previous element (deadline) : current element (deadline)
        if(slot_Available>0 && Heap in not empty){
            top = removeTop
            slot_Available--
            Result.push(top) 
        }
    4. sort Result as per deadline 
    5. print Result => obj.jobId
5. weighted-job-scheduling:- https://www.geeksforgeeks.org/weighted-job-scheduling can not use greedy because 
   1. there is no Deadline there 
   are start and end time with profit in {Job Sequencing Problem} :- Deadline and Profit was given 
   2. As like Activity selection there are start and end time But in this Problem {Profit is there }
   3. So this is the combination of Activity selection and Job Sequencing 
   [1. That will be done via Recursion {Max(Include current Job,Exclude current Job)}
    2. Or Dynamic Programming for optimal 
   ] 

######## Window Sliding ########### 
1. fixed window sliding :-
    if we are traversing for fixed size window so 
    for(let i=0;i<A.length;i++){
        //window size m 
        for(let j=i;j<i+m-1 && i + m - 1 < A.length;j++)
    }
    1. Maximum Sum of k size window 
2. Dynamic Window sliding 
     //Dynamic Window 
        for (let j = i + 1; j < A.length - m + 1;) {
    1. Minimum Size Sub Array whose sum greater than or equal to Target
    2. Shortest sub array having Anagram of pattern string 
    3. Longest unique substring 
3. 
    1. https://www.geeksforgeeks.org/length-of-the-longest-substring-without-repeating-characters/
    2. https://www.geeksforgeeks.org/find-number-times-string-occurs-given-string/
    3. https://www.geeksforgeeks.org/count-gfg-subsequences-given-string/?ref=lbp
    4. https://www.geeksforgeeks.org/print-concatenation-of-zig-zag-string-form-in-n-rows/
    5. Find All Anagrams in a String | Sliding window | Leetcode #438 // https://www.youtube.com/watch?v=fYgU6Bi2fRg
    6. Sliding Window Maximum | Leetcode #239  // https://www.youtube.com/watch?v=LiSdD3ljCIE
    7. Sliding Window Maximum - Leetcode 239 //https://www.youtube.com/watch?v=DfljaUwZsOk
    7. Sortest Sub array with sum at least K || Leetcode #862 - Monotonic Queue //https://www.youtube.com/watch?v=K0NgGYEAkA4
    8. Minimun Size Subarray Sum || Leetcode #209
    9. Permutation in String | Anagram of string s1 in string s2 | Leetcode #567


######## Two Pointer ###########
### Array should be sorted 
   1. 3 Sum closest 
   2. Most containing water 
   3. Trappinng rain water {total water to be collected}
######## Stack  ###########
1. Last In First Out 
######## Queue  ###########
1. First In First Out
######## DeQueue  ###########
   ### Minimum size sub array whose sum at least k {we have to use a Deque} 

    1. prepare current sum 
        currentSum+=A[i]
    2. current sum if equals to target 
        if(currentSum>=Target){
            minLength=Math.min(minLength,i+1)
        }
    3. let current = {first:Number.MAX_VALUE,second:Number.MAX_VALUE}
    4. Delete front for reduce the window size till //if currentSum > Target
        while(!dq.empty() && (currentSum - dq.front.second) >= Target){
            current = dq.deleteFront()
        }
    5. change min Length 
            minLength=Math.min(minLength,i-current.first)
    6. Maintain Monotonically Order {Delete rear if currentSum > Target}
        while(!dq.empty() && ( dq.rear.second) >= currentSum){ // mistake only ( dq.rear.second) >= currentSum will come at place of (currentSum - dq.rear.second) >= currentSum
            current = dq.deleteRear()
        }
    7. Add front in dequeue
        dq.addFront({first:i,second:sum})
1. Add and remove from both side .




######## Array  ###########
1. Kadane's Algo :-
    {Find the Maximum Sum Array}
2. Commulative sum :- 
    1. {Find the numbers of All Odd sum arrays}
        1. commulativeSum+=1
        2. if(current CommulativeSum %2 ==0){
            counter++
        }
        3. Two for loop on commulative Sum Array 
            (comulativeSum[j]-comulativeSum[i]+A[i]) % 2 !=0 means It will increase counter1 
3. Find Duplicate :-
    1. Use array value as index 
        for (i = 0; i < size; i++) 
            { 
                if (arr[ Math.abs(arr[i])] >= 0) 
                    arr[ Math.abs(arr[i])] = -arr[ Math.abs(arr[i])]; 
                else
                    console.log(Math.abs(arr[i]) + " "); 
            }	
    ****But there is a problem in the above approach. It prints the repeated number more than once.****
    2. 	 Count the frequency 
        // count the frequency
        for (let i = 0; i < arr_size; i++) {
            Arr[Arr[i] % arr_size] = Arr[Arr[i] % arr_size] + arr_size;
        }
        document.write("The repeating elements are : " + "</br>");
        for (let i = 0; i < arr_size; i++) {
            if (Arr[i] >= arr_size * 2) {
                document.write(i + " " + "</br>");
            }
        }
4. find missing in o(n) without extra space
    `use value as index Method` :- 
    1. Set each value 
        for (){
            if(A[Math.abs(A[i])]-1 != N){
                const newIndex = Math.abs(A[i])-1
                A[newIndex] *= -1 
            }
        }
    2. find 
        let ans = N + 1;
        for(){
            if(A[i]>0){   ************Ye ratne ki jarurat he ******
                ans = i + 1;
            }
        }
        console.log(ans)
5. Find the smallest positive number missing from an unsorted array | Set 1 :- 
    TimeO(n) SpaceO(1)
    You are given an unsorted array with both positive and negative elements. 
    You have to find the smallest positive number missing from the array in O(n) time 
    using constant extra space. You can modify the original array. -->

    ### using the logic of update the array via `frequency value` "Arr[(Arr[i]-1)%N]+=N" :-
    =>Arr[(Arr[i]-1)%N]+=N

    Same like "Find Duplicate O(n)" frequency update logic , only small difference is there we were using 

    Arr[Arr[i] % N] += N but here Arr[(Arr[i]-1)%N]+=N

    1. first check 1 is there or not . if its not there print and exit 
    2. make all element whose value  <=0 { 0 se chote ya barabar} OR  value > n {badi ho n se } 
        for(let i = 0; i < n; i++)
		if (arr[i] <= 0 || arr[i] > n)
			arr[i] = 1;
    3. Update value {frequency value}
        ### using the logic of update the array via frequency value "Arr[(Arr[i]-1)%N]+=N" :-
        A[A[i-1]%n]+=n
    4. then check 
        for(){
            if(A[i]<=n){
                return i+1 //i+1 is liye kyunki i index he and value jo ki missing he vo index +1 hogi 
            }
        }



######## Searching   ###########
1. Lenear Serch 
2. binary Search 


######## Devide and Conquare   ###########
1. Find in 2D Matrix
2. Find Mejority Element {Count of Element should be greater than N/2}
    mej = 0
    count = 1
    for(i=1){
        if A[i] == mej{
            count++
        }else{
            count--
        }
        //agar ittrate karte vakt again count reached at 0 
        if(count==0) {
            mej = i //new index
            count = 1
        }
    }
3. Power of X
4. Find the closest pair in N points 

######## Sorting   ###########
1. insertion sort ;- 
    Devide array into two part 
    first for loop i start from 1{
        let temp = A[i]
        let j 
        second loop j alway from i-1 to 0 && A[j]>temp{
            A[j+1]=A[j] //Swap current value ko ek ek index age badate rahenge jab tak ki A[j] temp se bada milta rahega 
        }
        A[j+1] = temp //Bad me fir akhiri baje hue element par temp ko replace kar dennge . 
    }

2. selection sort 
3. bubble sort 
4. quick sort 
5. merge sort (nlogn) {Sort and then merge recursivelly }
    1. devide and conquare method 
    2. find mid recersivelly 
    3. L1 Array = sort function for left part 
    4. L2 Array = sort function for right part 
    5. merge L1 & L2 
6. heap sort (nlogn)
    Add always from end 
        1. Call hepify function recursivelly till top until Max Heap {parent should be greaterthan childs}
    Delete from Top 
        1. Call hepify function recursivelly till last child until Max Heap {parent should be greaterthan childs}


######## Strings  ###########
######## Recursion  ###########
######## DP  ###########
######## Backtracking  ###########
######## Graph  ###########
    
