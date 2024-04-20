/**
 * Uses binary search to count occurrences of a specific num in a sorted array
 * - First finds the index of the first occurrence of num
 * - Then finds the index of the last occurrence of num
 * - The difference between these indices, plus one, gives the total number of occurrences since they are sorted together
 * - If num is not found, returns -1
 * 
 */

function sortedFrequency(array, num) {
    function findFirst() {
        let left = 0;
        let right = array.length - 1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            if (array[mid] < num) {
                left = mid + 1; 

            } else if (array[mid] > num) {
                right = mid - 1; 
            
            } else {
                if (mid === 0 || array[mid - 1] !== num) {

                    return mid; 
                }

                right = mid - 1;  
            }
        }
        return -1;  
    }

    function findLast() {
        let left = 0;
        let right = array.length - 1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            if (array[mid] < num) {
                left = mid + 1;

            } else if (array[mid] > num) {
                right = mid - 1;

            } else {
                if (mid === array.length - 1 || array[mid + 1] !== num) {

                    return mid;
                }

                left = mid + 1;  
            }
        }

        return -1;  
    }


    const firstIndex = findFirst();

    if (firstIndex === -1) {
        return -1;  
    }

    
    const lastIndex = findLast();


    return lastIndex - firstIndex + 1;  
}

module.exports = sortedFrequency;
