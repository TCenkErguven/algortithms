import express from "express";
import { insertionSort, selectionSort, mergeSort, bubbleSort } from "./sort.mjs";
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


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


