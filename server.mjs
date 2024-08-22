import express from "express";
import {
  insertionSort,
  selectionSort,
  mergeSort,
  bubbleSort,
  heapSort,
  quickSort,
} from "./sort.mjs";
import {
  linearSearch,
  binarySearch,
  hashing,
  jumpSearch,
  ternarySearch,
  exponentialSearch,
  treeSearch,
} from "./search.mjs";
const app = express();
const port = 3000;

app.use(express.json());

//Sorting Algorithms

app.post("/sort/insertion", (req, res) => {
  const unsortedArray = req.body;
  console.log("Insertion sort request...");
  const sortedArray = insertionSort(unsortedArray);
  res.json(sortedArray);
});

app.post("/sort/selection", (req, res) => {
  const unsortedArray = req.body;
  console.log("Selection sort request...");
  const sortedArray = selectionSort(unsortedArray);
  res.json(sortedArray);
});

app.post("/sort/merge", (req, res) => {
  const unsortedArray = req.body;
  console.log("Merge sort request...");
  const sortedArray = mergeSort(unsortedArray);
  res.json(sortedArray);
});

app.post("/sort/bubble", (req, res) => {
  const unsortedArray = req.body;
  console.log("Bubble sort request...");
  const sortedArray = bubbleSort(unsortedArray);
  res.json(sortedArray);
});

app.post("/sort/heap", (req, res) => {
  const unsortedArray = req.body;
  console.log("Heap sort request...");
  heapSort(unsortedArray);
  res.json(unsortedArray);
});

app.post("/sort/quick", (req, res) => {
  const unsortedArray = req.body;
  console.log("Quick sort request...");
  quickSort(unsortedArray, 0, unsortedArray.length - 1);
  res.json(unsortedArray);
});

app.post("/sort/quick", (req, res) => {
  const unsortedArray = req.body;
  console.log("Quick sort request...");
  quickSort(unsortedArray, 0, unsortedArray.length - 1);
  res.json(unsortedArray);
});

app.post("/search/linear", (req, res) => {
  const requestBody = req.body;
  console.log("Linear search request...");
  res.json(linearSearch(requestBody.array, requestBody.searchedValue));
});

app.post("/search/binary", (req, res) => {
  const requestBody = req.body;
  const arr = requestBody.array.sort((a, b) => a - b);
    let low = 0;
    let high = array.length -1;
  console.log("Binary search request...");
  res.json( binarySearch(low, high, arr, requestBody.searchedValue));
});

app.post("/search/hashing", (req, res) => {
  const unsortedArray = req.body;
  console.log("Hashing request...");
  hashing();
  res.json(unsortedArray);
});

app.post("/search/jump", (req, res) => {
  const requestBody = req.body;
  console.log("Jump search request...");
  res.json(jumpSearch(requestBody.array, requestBody.searchedValue));
});

app.post("/search/ternary", (req, res) => {
  const requestBody = req.body;
  console.log("Ternary search request...");
  const sortedArray = requestBody.array.sort((a, b)=> a - b);
  res.json(ternarySearch(0, sortedArray.length -1, 
    sortedArray, requestBody.searchedValue ));
});

app.post("/search/exponential", (req, res) => {
  const requestBody = req.body;
  console.log("Exponential search request...");
  const sortedArray = requestBody.array.sort((a, b)=> a - b);
  res.json(exponentialSearch(sortedArray, 
    requestBody.searchedValue));
});

app.post("/search/tree", (req, res) => {
  const unsortedArray = req.body;
  console.log("Tree search request...");
  treeSearch();
  res.json(unsortedArray);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
