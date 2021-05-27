// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).

 

// Example 1:

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
// Example 2:

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
// Example 3:

// Input: nums1 = [0,0], nums2 = [0,0]
// Output: 0.00000
// Example 4:

// Input: nums1 = [], nums2 = [1]
// Output: 1.00000
// Example 5:

// Input: nums1 = [2], nums2 = []
// Output: 2.00000

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(num1, num2) {
    let sortedArr = [];
    let i = 0;
    let j = 0;
    while (i < num1.length && j < num2.length) {
        if (num1[i] < num2[j]) {
            sortedArr.push(num1[i]);
            i++;
        } else {
            sortedArr.push(num2[j]);
            j++;
        }
    }
    if (i <  num1.length) {
        while (i < num1.length) {
            sortedArr.push(num1[i]);
            i++;
        }
    } else if (j <  num2.length) {
        while (j < num2.length) {
            sortedArr.push(num2[j]);
            j++;
        }
    }
    if (sortedArr.length % 2 === 0) {
        let index = sortedArr.length/2;
        return (sortedArr[index] + sortedArr[index - 1])/2;
    } else {
        let midIndex = (sortedArr.length/2).toFixed() - 1;
        return sortedArr[midIndex];
    } 
};