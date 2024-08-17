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
  const unsortedArray = req.body;
  console.log("Linear search request...");
  linearSearch();
  res.json(unsortedArray);
});

app.post("/search/binary", (req, res) => {
  const unsortedArray = req.body;
  console.log("Binary search request...");
  binarySearch();
  res.json(unsortedArray);
});

app.post("/search/hashing", (req, res) => {
  const unsortedArray = req.body;
  console.log("Hashing request...");
  hashing();
  res.json(unsortedArray);
});

app.post("/search/jump", (req, res) => {
  const unsortedArray = req.body;
  console.log("Jump search request...");
  jumpSearch();
  res.json(unsortedArray);
});

app.post("/search/ternary", (req, res) => {
  const unsortedArray = req.body;
  console.log("Ternary search request...");
  ternarySearch();
  res.json(unsortedArray);
});

app.post("/search/exponential", (req, res) => {
  const unsortedArray = req.body;
  console.log("Exponential search request...");
  exponentialSearch();
  res.json(unsortedArray);
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
