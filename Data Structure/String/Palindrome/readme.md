1. Check string is palindrome https://www.geeksforgeeks.org/c-program-check-given-string-palindrome/

1. Using 2 pinter low and high
2. while(l<h){
    check if l==h
        increase low and decrease high
   check if l!==h
        "There is no any Palingdrome"
}

#include <stdio.h>
#include <string.h>

// A function to check if a string str is palindrome
void isPalindrome(char str[])
{
	// Start from leftmost and rightmost corners of str
	int l = 0;
	int h = strlen(str) - 1;

	// Keep comparing characters while they are same
	while (h > l)
	{
		if (str[l++] != str[h--])
		{
			printf("%s is not a palindrome\n", str);
			return;
		}
	}
	printf("%s is a palindrome\n", str);
}

// Driver program to test above function
int main()
{
	isPalindrome("abba");
	isPalindrome("abbccbba");
	isPalindrome("geeks");
	return 0;
}
