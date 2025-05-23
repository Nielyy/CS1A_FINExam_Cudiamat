// Create an empty array to store numbers
let numbers = [];
const requiredNumbers = [42, 25, 12, 63, 48, 10, 16, 5, 30, 78];

// Use prompt() and push() to add numbers at runtime
for (let i = 0; i < requiredNumbers.length; i++) {
    let input = prompt(`Enter number #${i + 1} (suggested: ${requiredNumbers[i]}):`);
    let num = Number(input);
    numbers.push(num);
}

// Bubble Sort function with comparison logging
function bubbleSort(arr) {
    let n = arr.length;
    let temp;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            console.log(`Comparing ${arr[j]} and ${arr[j + 1]}`);
            if (arr[j] > arr[j + 1]) {
                // Swap
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// Pass the array to bubbleSort and log the sorted array
console.log("Original array:", numbers);
let sortedArray = bubbleSort(numbers);
console.log("Sorted array:", sortedArray);