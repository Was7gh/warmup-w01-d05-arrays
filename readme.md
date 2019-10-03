# Count of positives / sum of negatives

## Problem 

Create a function that takes an array of integers as an argument and returns an array, where the first element is the count of positive numbers and the second element is sum of negative numbers.

---

// function takearr(input) {
 
 var positive = 0
 var negative = 0
for ( let i =i ; i<input.lenght; i++)
{
if ( input[i] > 0)
{
    ++ positive
}


}else if (input[i] < 0)
{

  negative +=  nput[i] 
}

 return [postive, negative ]

}
takearr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])
## Example

Input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15].

Output: [10, -65].

---
## Bonus
If the input array is empty or null, return an empty array.

co