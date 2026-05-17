// 3. Find the first occurrence of a target element in a sorted array.

const firstOccurrence = (arr, target) => {
    if (!Array.isArray(arr)) throw new TypeError('arr must be an array');

    let left = 0;
    let right = arr.length - 1;
    let result = -1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            result = mid;
            right = mid - 1;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return result;
};

