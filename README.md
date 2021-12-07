# Code Challenge: Control Flow

## Instructions

1. Clone down this assignment to your `code-challenges' directory in AWS Cloud9.  
2. Code your solution using JavaScript in `index.js`. 
3. **Be sure to run and test your code throughly!**
4. By the end of Code Challenge, **commit and push your changes up to Github**.
5. Using the browser, verify that your solution is in your remote repo on Github.

## Code Problems

**All the following problems can be solved using a higher order array method. You cannot use .forEach() to solve the following problems.** 

**Test all your solutions for questions 1-6 with the following variable:** 

`const animals =['cheetah','dog', 'cat', 'dodobird', 'bear', 'dolphin']`

1. Write a function named `pluralize` that takes an array of words that are singular and returns a new array of the same words pluralized.
    
    ```jsx
    pluralize(animals) // ['cheetahs','dogs', 'cats', 'dodobirds', 'bears', 'dolphins']
    ```
    
2. Write a function named `uppercase` that takes an array of strings change every first letter in the string to uppercase.
    
    ```jsx
    uppercase(animals) // ['Cheetah','Dog', 'Cat', 'Dodobird', 'Bear', 'Dolphin']
    ```
    
3. Write a function named `longWords` that takes an array of strings and returns only the strings with more than 3 letters
    
    ```jsx
    longWords(animals) // ['cheetah', 'dodobird', 'bear', 'dolphin']
    ```
    
4. Write a function named `shortWords` that takes an array of strings return the strings with less than 5 letters
    
    ```jsx
    shortWords(animals) // ['dog', 'cat', 'bear']
    ```
    
5. Write a function named `oddLength` that  takes an array of strings and returns an array of just the words that have an odd number of characters:
    
    ```jsx
    oddLength(animals) // ['cheetah','dog', 'cat', 'dolphin']
    ```
    
6. Write a function named `longToShort` that takes an array of strings, and sorts the array by string length in order of greatest to least 
    
    ```jsx
    longToShort(animals) //['cheetah','dog', 'cat', 'dodobird', 'bear', 'dolphin']
    ```
    
7. Write a function named `sum` that takes an array of numbers and returns the sum of all the numbers in the array.
    
    ```jsx
    const numbers = [22, 15, 1114, 416, 37, 4]
    sum(numbers) // 1608
    ```
