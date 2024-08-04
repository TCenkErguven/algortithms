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
      [unSortedElements[i], unSortedElements[lowest]] = [unSortedElements[lowest], unSortedElements[i]]; // Swap elements
    }
  }

  return unSortedElements;
}


export function mergeSort(unsortedArray){
  const unSortedElements = [...unsortedArray];
  const length = unSortedElements.length;

  return unSortedElements;
}