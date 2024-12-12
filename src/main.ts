const findKthLargest = (nums: number[], k: number) => {
  const heap: number[] = [];

  // Create a min-heap of size k
  for (let i = 0; i < k; i++) {
    heap.push(nums[i]);
  }

  // Heapify the array to create a min-heap
  heap.sort((a, b) => a - b);

  // Process the remaining elements
  for (let i = k; i < nums.length; i++) {
    if (nums[i] > heap[0]) {
      heap.shift(); // Remove the smallest element
      heap.push(nums[i]);
      heap.sort((a, b) => a - b);
    }
  }

  return heap[0];
};
const findLargest = (nums: number[]) => {
  let largest = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > largest) {
      largest = nums[i];
    }
  }
  return largest;
};

console.log(findLargest([3, 2, 1, 5, 6, 4])); // 6
console.log(findKthLargest([3, 2, 1, 5, 6, 4], 4)); // 3
console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)); // 4
