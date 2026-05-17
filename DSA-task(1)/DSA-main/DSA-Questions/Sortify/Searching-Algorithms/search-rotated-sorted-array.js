// 5. Search an element in a rotated sorted array.

const searchRotatedArray = (arr, target) => {
    if (!Array.isArray(arr)) throw new TypeError('arr must be an array');

    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) return mid;

        if (arr[left] <= arr[mid]) {
            if (target >= arr[left] && target < arr[mid]) right = mid - 1;
            else left = mid + 1;
        } else {
            if (target > arr[mid] && target <= arr[right]) left = mid + 1;
            else right = mid - 1;
        }
    }

    return -1;
};

