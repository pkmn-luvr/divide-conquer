/**
 * Counts number of zeroes in a sorted binary array (which has all 1's followed by 0's).
 * - Uses binary search to efficiently locate the first 0.
 * - If the middle element is 1, the search narrows to only the right half of the array.
 * - If the middle element is 0, it checks whether it's the first 0,
 *    - if it is the first 0, the function just returns count of 0's from here to the end of array
 *      by subtracting index of the first 0 from arr.length.
 *    - If it is NOT the first 0, the search for additional 0's continues to the left; any elements 
 *      to the right are already known as 0's and are included once first 0 index is identified.
 */

function countZeroes(arr) {
    let left = 0, right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === 0) {
            if (mid === 0 || arr[mid - 1] === 1) {
                return arr.length - mid; 
            } else {
                right = mid - 1; 
            }
        } else {
            left = mid + 1;
        }
    }
  
    return 0;
}
module.exports = countZeroes;
