/**
 * Uses binary search to find floor of x in a sorted array (the largest element in the array which is smaller than or equal to x)
 * - Checks middle element of the array:
 *   - If middle element equal to x, floor is idenfied immediately
 *   - If middle element is less than x, updates floor to this element, then searches right half only
 *   - If middle element is greater than x, search left half only to find floor value and update floor value
 * - Search repeats until left and right pointers cross
 * - Returns latest updated floor value or -1 if no element in the array is less than or equal to x
 */

function findFloor(arr, x) {
    let left = 0;
    let right = arr.length - 1;
    let floor = -1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === x) {
            return arr[mid]; 
        } else if (arr[mid] < x) {
            floor = arr[mid]; 
            left = mid + 1;   
        } else {
            right = mid - 1; 
        }
    }

    return floor; 
}

module.exports = findFloor