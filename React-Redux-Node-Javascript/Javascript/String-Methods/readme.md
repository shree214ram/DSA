# String Functions 
Difference between slice , substring and sub str?
let str = "Apple, Banana, Kiwi";

Sr.No
Slice
Substring
Substr


# (7,12)
str.slice(7,12) (Start Index, To Index) = Banana
str.substring(7,12) (Start Index, To Index) = Banana Same
str.substr(7,12) (Start Index, To length {How much we have to run from start index}) = 
Banana, Kiwi



# (-6,-12)
str.slice(-6,-12) (Start Index from end, To Index from end ) 

"Apple, Banana, Kiwi"
            12—---6------0
            ←—------------

= Banana
str.substring(-6,-12) negative always understand the 0 

= null (Nothing will print)


# (-4)
str.slice(-4)= Kiwi , why because 
Start from -4 and not defined  last index so (0 because this is negative direction)
str.substring(-4)= Apple, Banana, Kiwi

Why because -ve number means 0 and the no last index defined so from 0 to the end of string . 
str.substr(-4)= Kiwi , why because 
Start from -4 and not defined length means upto last index (0 because this is negative direction)

str.substr(14,3) = ki

str.substr(14) = kiwi


