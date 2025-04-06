// The MinHeap is a specialized binary tree-based data structure that satisfies the heap property:
// the parent node is always smaller than or equal to its children. And all its levels are filled,
// except maybe the last, where all nodes as left as possible

// MinHeap is particularly useful for solving problems where you need to efficiently manage a dynamic set
// of elements while keeping track of the smallest (or largest, in the case of MaxHeap) values.

// LeetCode problems:
// 1. Kth Largest Element in an Array (#215) - https://leetcode.com/problems/kth-largest-element-in-an-array/
// 2. Merge K Sorted Lists (#23) - https://leetcode.com/problems/merge-k-sorted-lists/
// 3. Top K Frequent Elements (#347) - https://leetcode.com/problems/top-k-frequent-elements/
// 4. Last Stone Weight (#1046) - https://leetcode.com/problems/last-stone-weight/
// 5. Task Scheduler (#621) - https://leetcode.com/problems/task-scheduler/
// 6. Network Delay Time (#743) - https://leetcode.com/problems/network-delay-time/

// Special thanks: Jilles Soeters
// Thank you for the insightful article on MinHeap. It was very helpful, and I enjoyed writing my own ✨
// source: https://jilles.me/data-structures-binary-heaps-in-javascript-minheap-maxheap/

class minHeap {
    constructor() {
      this.heap = []
    }
    
    getParentIndex(nodeIndex) {
      if (nodeIndex === 0) {
        return null
      }
      return Math.floor((nodeIndex - 1) / 2)
    }
    
    getLeftChildIndex(nodeIndex) {
      const index = 2 * nodeIndex + 1
      return index < this.size() ? index : null
    }
    
    getRightChildIndex(nodeIndex) {
      const index = 2 * nodeIndex + 2
      return index < this.size() ? index : null
    }
    
    swap(indexOne, indexTwo) {
      const swapper = this.heap[indexTwo]
      this.heap[indexTwo] = this.heap[indexOne]
      this.heap[indexOne] = swapper
    }
    
    insert(value) {
      this.heap.push(value)
      this.bubbleUp(this.size() - 1)
    }
    
    bubbleUp(nodeIndex) {
      const parentIndex = this.getParentIndex(nodeIndex)
      if (parentIndex === null) {
        return
      }
      
      if (this.heap[nodeIndex] < this.heap[parentIndex]) {
        // Bubble UP!
        this.swap(nodeIndex, parentIndex)
        this.bubbleUp(parentIndex)
      }
    }
    
    remove() {
      if (this.size() === 0) {
        return null
      }
    
      const node = this.heap[0]
    
      if (this.size() === 1) {
        this.heap.pop()
        return node
      }
    
      const lastNode = this.heap.pop()
      this.heap[0] = lastNode
      this.bubbleDown(0)
    
      return node
    }
    
    bubbleDown(nodeIndex) {
      const leftIndex = this.getLeftChildIndex(nodeIndex)
      const rightIndex = this.getRightChildIndex(nodeIndex)
      let swapIndex = null
      
      if (leftIndex === null) {
        return
      }
      
      if (this.heap[leftIndex] < this.heap[nodeIndex]) {
        swapIndex = leftIndex
      }
      
      // If the right item exists and is smaller than the left AND is smaller than the current
      // (which is smaller than the current as we found out one step ago)
      // E.g. 21
      //     / \
      //    19 5
      if (rightIndex !== null
         && this.heap[rightIndex] < this.heap[leftIndex]
         && this.heap[rightIndex] < this.heap[nodeIndex]) {
        swapIndex = rightIndex
      }
      
      // If the swapIndex is still null then we're all the way bubbleDown'ed
      // E.g. 21 (current)
      //     / \
      //    23 28
      if (swapIndex === null) {
        return
      }
      
      this.swap(nodeIndex, swapIndex)
      this.bubbleDown(swapIndex)
      
    }
    
    size() {
      return this.heap.length
    }
    
    showRootValue() {
      const value = this.size() > 0 ? this.heap[0] : null
      console.log(value)
      return value
    }
    
    showHeap() {
      console.log(this.heap)
      return this.heap
    }
  }
  
  // Some tests
  // const myMinHeap = new minHeap()
  
  // myMinHeap.insert(4)
  // myMinHeap.insert(9)
  // myMinHeap.insert(8)
  // myMinHeap.insert(10)
  // myMinHeap.insert(12)
  // myMinHeap.insert(18)
  // myMinHeap.insert(19)
  // myMinHeap.showHeap()
  // myMinHeap.remove()
  // myMinHeap.showHeap()