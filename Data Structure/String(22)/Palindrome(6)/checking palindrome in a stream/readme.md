
## Online algorithm for checking palindrome in a stream
https://www.geeksforgeeks.org/online-algorithm-for-checking-palindrome-in-a-stream/

Difficulty Level : Expert
Last Updated : 29 Jun, 2022
Given a stream of characters (characters are received one by one), write a function that prints ‘Yes’ if a character makes the complete string palindrome, else prints ‘No’. 

AABAA

A yes
AA Yes
AAB No
AABA No
AABAA Yes

#### Steps :- 

1) The first character is always a palindrome, so print yes for 
     first character.


2) Initialize reverse of first half as "a" and second half as "b".  
     Let the hash value of first half reverse be 'firstr' and that of 
     second half be 'second'.

3) Iterate through string starting from second character, do following
      for every character str[i], i.e., i varies from 1 to n-1.
     a) If 'firstr' and 'second' are same, then character by character 
        check the substring ending with current character and print 
        "Yes" if palindrome.
        Note that if hash values match, then strings need not be same.
        For example, hash values of "ab" and "ba" are same, but strings
        are different. That is why we check complete string after hash.

     b) Update 'firstr' and 'second' for next iteration.  
           If 'i' is even, then add next character to the beginning of 
                           'firstr' and end of second half and update 
                            hash values.
           If 'i' is odd,  then keep 'firstr' as it is, remove leading 
                           character from second and append a next 
                           character at end.



#### Let us see all steps for example :- 

string “abcba” Initial values of ‘firstr’ and ‘second’      

firstr’ = hash(“a”), ‘second’ = hash(“b”) Start from second character, i.e., i = 1      

Compare ‘firstr’ and ‘second’, they don’t match, so print no.     
Calculate hash values for next iteration, i.e., i = 2      
Since i is odd, ‘firstr’ is not changed and ‘second’ becomes hash(“c”) i = 2      

Compare ‘firstr’ and ‘second’, they don’t match, so print no.     
Calculate hash values for next iteration, i.e., i = 3      
Since i is even, ‘firstr’ becomes hash(“ba”) and ‘second’ becomes hash(“cb”) i = 3      

Compare ‘first’ and ‘second’, they don’t match, so print no.      
Calculate hash values for next iteration, i.e., i = 4      
Since i is odd, ‘firstr’ is not changed and ‘second’ becomes hash(“ba”) i = 4     

‘firstr’ and ‘second’ match, compare the whole strings, they match, so print yes      
We don’t need to calculate next hash values as this is last index The idea of using rolling hashes is, next hash value can be calculated from previous in O(1) time by just doing some constant number of arithmetic operations. Below are the implementations of above approach. 