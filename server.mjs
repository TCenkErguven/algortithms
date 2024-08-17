import express from "express";
import {
  insertionSort,
  selectionSort,
  mergeSort,
  bubbleSort,
  heapSort,
  quickSort,
} from "./sort.mjs";
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

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
