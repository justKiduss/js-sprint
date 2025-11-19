Day 16 – Algorithms + Bitwise Logic Practice
Overview

Day 16 focused on strengthening core problem-solving skills by solving multiple LeetCode algorithm problems. The day emphasized identifying patterns, optimizing brute-force logic, and understanding bitwise operations.

Problems Solved
1. 2154. Keep Multiplying Found Values by Two

Goal: Repeatedly double the value if it exists in the array.
Key idea: Keep checking in a loop until the number no longer appears.

Final Solution (Optimal):

var findFinalValue = function(nums, original) {
    const set = new Set(nums);
    while (set.has(original)) original *= 2;
    return original;
};

2. 231. Power of Two

Goal: Determine whether a number is a power of two.

Final Solution (Bitwise Optimal):

var isPowerOfTwo = function(n) {
    return n > 0 && (n & (n - 1)) === 0;
};

3. 2980. Check if Bitwise OR Has Trailing Zeros

Goal: Check if any pair of numbers in the array, when OR’d together, ends with a trailing zero (i.e., is even).

Key observation:
A number is even if the last bit is 0.
For the OR of two numbers to be even, you need at least two even numbers in the list.

Final Solution (Efficient and Correct):

var hasTrailingZeros = function(nums) {
    let countEven = 0;
    for (let n of nums) {
        if ((n & 1) === 0) countEven++;
        if (countEven >= 2) return true;
    }
    return false;
};

Skills Improved

Bitwise operations (&, |)

Pattern recognition for algorithm speed-up

Using sets to reduce time complexity

Understanding how loops and conditions interact with bit operations

Moving from brute force → optimized O(n) solutions

Status

Day 16 completed successfully.
Ready for Day 17.