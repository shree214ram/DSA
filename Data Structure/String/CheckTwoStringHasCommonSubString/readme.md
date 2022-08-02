https://www.geeksforgeeks.org/check-two-strings-common-substring/?ref=gcse

1. Broute Force 
    two loop and compare O(n^2)
2. Hash Map o(n) 
    1. Set a hash map with 26 
        const arrayMap =  Array(26).fill(false)
    2. ittrate all the character of string1 one by one 
        for(i=0;i<str.length;i++){
            arrayMap[str1[i]-'a'] = true
        }
    3.  ittrate all the character of string2 one by one 
        for(i=0;i<str.length;i++){
            if(arrayMap[str2[i]-'a']){
                return true
            }
        }