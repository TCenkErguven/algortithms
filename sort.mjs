/**
 * Instertion sort best for sorting small number of elements/
 */

export function insertionSort(unsortedArray) {
  const unSortedElements = [...unsortedArray];
  const length = unSortedElements.length;

  for (let i = 1; i <= unSortedElements.length; i++) {
    const key = unSortedElements[i];
    if (!key) break;
    let j = i - 1;
    while (j >= 0 && unSortedElements[j] > key) {
      unSortedElements[j + 1] = unSortedElements[j];
      j = j - 1;
    }
    unSortedElements[j + 1] = key;
  }

  return unSortedElements;
}

export function selectionSort(unsortedArray) {
  const unSortedElements = [...unsortedArray];
  const length = unSortedElements.length;

  for (let i = 0; i < unSortedElements.length - 1; i++) {
    let lowest = i;

    for (let j = i + 1; j < length; j++) {
      if (unSortedElements[j] < unSortedElements[lowest]) {
        lowest = j;
      }
    }

    if (i !== lowest) {
      [unSortedElements[i], unSortedElements[lowest]] = [
        unSortedElements[lowest],
        unSortedElements[i],
      ];
    }
  }

  return unSortedElements;
}

//for large data its better to use rather than previous two
export function mergeSort(unsortedArray) {
  const unSortedElements = [...unsortedArray];
  if (unSortedElements.length === 1) return unsortedArray;

  const middle = Math.floor(unSortedElements.length / 2);
  const left = unSortedElements.slice(0, middle);
  const right = unSortedElements.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let resultArray = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      resultArray.push(left[leftIndex]);
      leftIndex++;
    } else {
      resultArray.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return resultArray
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
}

//Popular but it works inefficient. It works by repeatedly swapping
//adjacent elements that are out of order
export function bubbleSort(unsortedArray) {
  const unSortedElements = [...unsortedArray];
  const lengthOfElements = unSortedElements.length;

  for (let i = 0; i < lengthOfElements - 1; i++) {
    for (let j = lengthOfElements; j >= i; j--) {
      if (unSortedElements[j] < unSortedElements[j - 1]) {
        const prev = unSortedElements[j];
        const next = unSortedElements[j - 1];
        unSortedElements[j] = next;
        unSortedElements[j - 1] = prev;
      }
    }
  }

  return unSortedElements;
}

//heaps sort there is two kind of heap sort one is this
//max and the other one is min both works the same way
//their name aliases show how they handle ops.
function maxHeapify(array, index, heapSize) {
  let largest = index;
  const left = 2 * index + 1; //Left child index
  const right = 2 * index + 2; //Right child index

  if (left < heapSize && array[left] > array[largest]) {
    largest = left;
  }

  if (right < heapSize && array[right] > array[largest]) {
    largest = right;
  }

  if (largest != index) {
    [array[index], array[largest]] = [array[largest], array[index]];
    maxHeapify(array, largest, heapSize);
  }
}

export function heapSort(unsortedArray) {
  const n = unsortedArray.length;

  // Build a max heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    maxHeapify(unsortedArray, i, n);
  }
  // Extract elements from the heap one by one
  for (let i = n - 1; i > 0; i--) {
    // Move the current root to the end
    [unsortedArray[0], unsortedArray[i]] = [unsortedArray[i], unsortedArray[0]];
    maxHeapify(unsortedArray, 0, i);
  }
}

/*
The key process in quickSort is a partition() . The target of partitions is to place
the pivot (any element can be chosen to be a pivot) at its correct position in the sorted array 
and put all smaller elements to the left of the pivot, and all greater elements to the right of the pivot.

There exist two main algorithms for partitioning Lomuto and Hoare. This example, we have considered Lomuto. 
However Hoare’s is faster than Lomuto.
*/
export function quickSort(array, low, high) {
  if (low < high) {
    const pivot = partition(array, low, high);

    // Recursion calls for smaller elements
    // and greater or equals elements
    quickSort(array, low, pivot - 1);
    quickSort(array, pivot + 1, high);
  }
}

function partition(array, low, high) {
  const pivot = array[high];

  let i = low - 1;
  // Traverse arr[low..high] and move all smaller
  // elements on the left side. Elements from low to
  // i are smaller after every iteration
  for (let j = low; j < high; j++) {
    if (array[j] < pivot) {
      i++;
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  [array[i + 1], array[high]] = [array[high], array[i + 1]];
  return i + 1;
}
