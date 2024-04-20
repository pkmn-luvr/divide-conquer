/**
 * - Uses binary search to find the smallest element's index, which identifies how many times arr has been rotated
 * - First checks if array is rotated by comparing the first and last elements:
 *   - If the first element is less than the last, the array must be in original order (no rotation)
 * - Binary search is then used to find the smallest element:
 *   - If middle element is greater than the last, then search for smallest element narrows to only the right half
 *   - If middle element is less than or equal to the last, then the is limited left half, including mid, 
 *     since the smallest element must either the middle element or to the left of it
 * - This repeats until left and right pointers meet, which finds the smallest element, thus finding the index of smallest element!
 */

function findRotationCount(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        if (arr[left] < arr[right]) {
            return left; 
        }
        
        let mid = Math.floor((left + right) / 2);
        
        if (arr[mid] > arr[right]) {
            left = mid + 1; 
        } else {
            right = mid; 
        }
    }

    return left; 
}


module.exports = findRotationCount