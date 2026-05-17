// 1. Implement Binary Search using iteration.

const binarySearchIterative = (arr, target) => {
    if (!Array.isArray(arr)) throw new TypeError('arr must be an array');

    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) return mid;
        if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }

    return -1;
};

