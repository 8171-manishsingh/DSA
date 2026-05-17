// 2. Implement Binary Search using recursion.

const binarySearchRecursive = (arr, target, left = 0, right = arr.length - 1) => {
    if (!Array.isArray(arr)) throw new TypeError('arr must be an array');
    if (left > right) return -1;

    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) return mid;
    if (arr[mid] < target) return binarySearchRecursive(arr, target, mid + 1, right);
    return binarySearchRecursive(arr, target, left, mid - 1);
};

