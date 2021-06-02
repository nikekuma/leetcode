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

var findMedianSortedArrays = function(num1, num2) {
    let m = num1.length;
    let n = num2.length;
    let i = 0;
    let j = 0;
    let m1 = -1;
    let m2 = -1;
    if ((m + n) % 2 === 0) {
        for (let count = 0; count <= (m + n)/2; count++) {
            m2 = m1;
        if (i !== m && j !== n) {
            m1 = num1[i] < num2[j] ? num1[i++] : num2[j++];
        } else if (i < m) {
            m1 = num1[i++];
        } else {
            m1 = num2[j++];
        }
        }
        return (m1 + m2)/2;
    } else {
        for (let count = 0; count <= (m + n)/2; count++) {
            if (i !== m && j !== n) {
            m1 = num1[i] < num2[j] ? num1[i++] : num2[j++];
        } else if (i < m) { 
            m1 = num1[i++];
        } else {
            m1 = num2[j++];
        }
        }
        return m1;
    }
};


var findMedianSortedArrays = function(num1, num2) {
	if (num1.length > num2.length) {
  	[num1, num2] = [num2, num1];
  }
  let l1 = 0;
  let h1 = num1.length;
  let totalLen = num1.length + num2.length;
  while (l1 <= h1) {
  	i1 = Math.ceil((l1 + h1)/2);
    i2 = Math.ceil(totalLen/2 -i1); 
    minright1 = i1 === num1.length ? Number.MAX_SAFE_INTEGER : num1[i1]
    maxleft1 = i1 === 0 ? Number.MIN_SAFE_INTEGER : num1[i1 - 1];
    minright2 = i2 === num2.length ? Number.MAX_SAFE_INTEGER : num2[i2]
    maxleft2 = i2 === 0 ? Number.MIN_SAFE_INTEGER : num2[i2 - 1];
    
    if (maxleft1 <= minright2 && minright1 >= maxleft2) {
    	if ((totalLen % 2) === 0) {
       return (Math.max(maxleft1, maxleft2) + Math.min(minright1, minright2))/2;
      } else {
      	return Math.max(maxleft1, maxleft2);
      }
    } else if (maxleft1 > minright2) {
    	h1 = i1 - 1;
    } else {
    	l1 = i1 + 1;
    }
  }
};