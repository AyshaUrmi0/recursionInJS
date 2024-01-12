//Write a JavaScript program to compute the sum of an array of integers using recursion.

function sum(arr) {
    if (arr.length === 0) {
        return 0;
    }
    return arr.pop() + sum(arr);


}

console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));



