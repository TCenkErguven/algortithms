//Linear Search:
/* 
    Linear search as it can understand from its name,
    can look for elements from starting index until 
    it finds the identical value it searches
*/
export function linearSearch(array, searchedValue) {
    for(let i = 0; array.length > i; i++){
        if(array[i] === searchedValue){
            return `Searched value is located at the index ${i}`;
        }        
    }
    return `Searched value ${searchedValue} could not be found inside the array`;
}

//Binary Search:
/*
    Binary search is a search algorithm used to find the 
    position of a target value within a SORTED ARRAY. 
    It works by repeatedly dividing the search interval in 
    half until the target value is found or the interval is empty. 
    The search interval is halved by comparing the target element 
    with the middle value of the search space.
*/
export function binarySearch(low, high, array, searchedValue) {
    let mid;

    while(high >= low){
        mid = low + Math.floor((high - low) / 2);

        if (array[mid] === searchedValue)
            return `Searched value is located at the index ${mid} inside this sorted array  [${array}]` 

        if (array[mid] > searchedValue)
            high = mid - 1;
        else
            low = mid + 1;;
    }
    return `Searched value ${searchedValue} could not be found inside the array`;
}


//Jump Search:
/*
    Jump Search is a searching algorithm for sorted arrays
*/
export function jumpSearch(array, searchedValue) { 
    const n = array.length;
    
    // Finding block size to be jumped 
    let step = Math.floor(Math.sqrt(n)); 
    
    // Finding the block where element is present (if it is present) 
    let prev = 0; 
    while (array[Math.min(step, n) - 1] < searchedValue) { 
        prev = step; 
        step += Math.floor(Math.sqrt(n)); 
        if (prev >= n) 
            return `Searched value ${searchedValue} could not be found inside the array`;
    } 
   
    // Doing a linear search for x in block beginning with prev. 
    while (array[prev] < searchedValue) { 
        prev++; 
        // If we reached the next block or end of array, element is not present. 
        if (prev == Math.min(step, n)) 
            return `Searched value ${searchedValue} could not be found inside the array`;
    } 
    
    // If the element is found 
    if (array[prev] == searchedValue) 
        return prev; 
   
    return `Searched value ${searchedValue} could not be found inside the array`;
} 


//Ternary Search:
/*
    There are various search algorithms, 
    each better suited for certain situations. 
    For instance, a binary search divides information
    into two parts, while a ternary search does the 
    same but into three equal parts. It’s worth noting 
    that ternary search is only effective for SORTED ARRAY.
*/
export function ternarySearch(left, right, array, searchedValue) {
    if (right >= left) {
        // Find the mid points to divide into three parts
        const mid1 = left + Math.floor((right - left) / 3);
        const mid2 = right - Math.floor((right - left) / 3);

        // Check if the searched value is at mid1 or mid2
        if (array[mid1] === searchedValue) {
            return `Searched value is located at the index ${mid1} inside this sorted array [${array}]`;
        }
        if (array[mid2] === searchedValue) {
            return `Searched value is located at the index ${mid2} inside this sorted array [${array}]`;
        }

        if (searchedValue < array[mid1]) {
            return ternarySearch(left, mid1 - 1, array, searchedValue);
        } else if (searchedValue > array[mid2]) {
            return ternarySearch(mid2 + 1, right, array, searchedValue);
        } else {
            return ternarySearch(mid1 + 1, mid2 - 1, array, searchedValue);
        }
    }

    return `Searched value ${searchedValue} could not be found inside the array`;
}

//Exponential Search:
/*
    Because it use binarySearch, array used on it must be sorted
*/
export function exponentialSearch(array, searchedValue) {
    const arrayLength = array.length;
    if (array[0] == searchedValue)
        return `Searched value is located at the index ${0} inside this sorted array [${array}]`;
  
    // Find range for binary search 
    let i = 1;
    while (i < arrayLength && array[i] <= searchedValue) {
        i = i * 2;
    }
  
    // Call binary search for
    // the found range.
    return binarySearch( Math.floor(i / 2), 
        Math.min(i, arrayLength - 1), array, searchedValue);
}

//Tree search
export function treeSearch() {}
