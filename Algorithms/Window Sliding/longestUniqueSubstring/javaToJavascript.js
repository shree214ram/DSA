class GFG
{
    static longestUniqueSubsttr(str)
    {
        var test = "";
        // Result
        var maxLength = -1;
        // Return zero if string is empty
        if ((str.length === 0))
        {
            return 0;
        }
        else if (str.length == 1)
        {
            return 1;
        }
        for ( const  c of str.split('')) {
        var current = new String(c).toString();
        // If string already contains the character
        // Then substring after repeating character
        if (test.includes(current))
        {
            test = test.substring(test.indexOf(current) + 1);
        }
        test = test + new String(c).toString();
        maxLength = Math.max(test.length,maxLength);
}
        return maxLength;
    }
    // Driver code
    static main(args)
    {
        var str = "geeksforgeeks";
        console.log("The input string is " + str);
        var len = GFG.longestUniqueSubsttr(str);
        console.log("The length of the longest " + "non-repeating character " + "substring is " + len);
    }
}
GFG.main([]);