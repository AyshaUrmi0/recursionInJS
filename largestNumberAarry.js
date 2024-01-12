//find the largest number in the array using recursion

function largestNumber(arr) {
    if (arr.length === 0) {
        return 0;
    }
    let max = largestNumber(arr.slice(1));
    return Math.max(max, arr[0]);
}

console.log(largestNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
