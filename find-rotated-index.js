/**
 * Uses binary search to find index of num in the rotated sorted array
 * - Checks the middle element of the array:
 *   - If middle is greater than last element, then rotation point must be after the middle, meaning right half may still be sorted...
 *     - If num is in middle to the right, search only the right half
 *     - If num is on left, search only the left half
 * - The search continues until the 'left' and 'right' pointers meet. If the number is found during the search, return its index.
 * - If num isn't found by the end search, return -1
 */

function findRotatedIndex(arr, num) {
    let left = 0; 
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === num) {
            return mid;
        }

        if (arr[left] <= arr[mid]) {
            if (num >= arr[left] && num <= arr[mid]) {
                right = mid - 1; 
            } else {
                left = mid + 1;  
            }
        } else {
            if (num >= arr[mid] && num <= arr[right]) {
                left = mid + 1;   
            } else {
                right = mid - 1;  
            }
        }
    }

    return -1;  
}

module.exports = findRotatedIndex