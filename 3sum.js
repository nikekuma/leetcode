// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

 

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Example 2:

// Input: nums = []
// Output: []
// Example 3:

// Input: nums = [0]
// Output: []
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let len=nums.length;
    nums=nums.sort((a,b)=>a-b);
    let hashMap={};
    for(let i=0; i<len-2; i++) {
    	for(let j=i+1; j<len-1; j++) {
    	  for(let k=j+1; k<len; k++) {
    	    let temp=[];     
    	    if(nums[i]+nums[j]+nums[k] === 0) {
            temp.push(nums[i]);
            temp.push(nums[j]);
            temp.push(nums[k]);
            hashMap[temp]=temp;
    	    }
    	  }
    	}      
    }
    return Object.values(hashMap);
};

//---------------------------------------------------------------------------
var hashMap = {};
var ans = [];

var threeSum = function(nums) {
	let n = nums.length;
  let sum = 0;
  let output = [];
  solve(nums, n, sum, output);
  for (let i = 0; i < ans.length; i++) {
    let key = ans[i].sort((a,b)=>a-b);
    this.hashMap[key] = ans[i];
  }
  return Object.values(this.hashMap);
};

var solve = function(nums, n, sum, output) {
	if (sum === 0 && output.length === 3) {
  	this.ans.push(output);
  }
  if (n === 0) {
  	return;
  }
  let sum1 = sum + nums[n-1];
  let sum2 = sum;
  let output1 = [...output];
  output1.push(nums[n-1]);
  let output2 = [...output];
	solve(nums, n-1, sum1, output1);
  solve(nums, n-1, sum2, output2);
}

var threeSum = function(nums) {
  let n = nums.length;
  let sum = 0;
  let ans = [];
  nums = nums.sort((a,b)=>a-b);
  for (let i = 0; i < n; i++) {
	if (i > 0 && nums[i] === nums[i-1]) {
  	  continue;
  	} 
  	let l = i + 1;
    let r = n - 1;
  	while (l < r) {
    	let temp = [];
      let sum3 = nums[i] + nums[l] + nums[r];
    	if (sum3 === 0) {
      	temp.push(nums[i]);
        temp.push(nums[l]);
        temp.push(nums[r]);
      	ans.push(temp);
        l++;
        while (nums[l] === nums[l-1] && l < r) {
        	l++;
        }
      }
      else if (sum3 < 0) {
      	l++;
      } else if (sum3 > 0) {
      	r--;
      }
    }
  }
  return ans;
};