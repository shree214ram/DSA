# Pangram 

### string is pangram if all the character from A to Z is present . 

* The quick brown fox jumps over the lazy dog

Steps :-
1. Make "mark" 26 Number in empty Hash table 
2. Get the current element index from given string 
3. find the index:- check from current index value T is in between {a to z} OR {A to Z} and then 
   if ('A' <= str[i] && str[i] <= 'Z')
            index = str.charCodeAt(i) - 'A'.charCodeAt(0);
    // If lowercase character, subtract 'a'
    // to find index.
    else if ('a' <= str[i] && str[i] <= 'z')
            index = str.charCodeAt(i) - 'a'.charCodeAt(0);
4. mark the current index true in Hash Table 
5. ittrate loop from 0 to 25 and check in hash table every element exist if not then return false 



?? kya ye dono equal he ??

index = str.charCodeAt(i) - 'A'.charCodeAt(0);

index = str[i].charCodeAt(0) - 'A'.charCodeAt(0);
