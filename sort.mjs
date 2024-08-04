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
      [unSortedElements[i], unSortedElements[lowest]] = [unSortedElements[lowest], unSortedElements[i]];
    }
  }

  return unSortedElements;
}

//for large data its better to use rather than previous two
export function mergeSort(unsortedArray){
  const unSortedElements = [...unsortedArray];
  if(unSortedElements.length === 1)
    return unsortedArray;

  const middle = Math.floor(unSortedElements.length / 2);
  const left  = unSortedElements.slice(0, middle);
  const right = unSortedElements.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right){
  let resultArray = []; 
  let leftIndex = 0; 
  let rightIndex = 0;

  while(leftIndex < left.length && rightIndex < right.length){
    if(left[leftIndex] < right[rightIndex]){
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
export function bubbleSort(unsortedArray){
  const unSortedElements = [...unsortedArray];
  const lengthOfElements = unSortedElements.length;

  for(let i = 0; i < lengthOfElements - 1 ; i++){
    for(let j = lengthOfElements; j >= i; j--){
      if(unSortedElements[j] < unSortedElements[j - 1]){
        const prev = unSortedElements[j];
        const next = unSortedElements[j - 1];
        unSortedElements[j] = next;
        unSortedElements[j -1] = prev;  
      }
    }
  }

  return unSortedElements;
}