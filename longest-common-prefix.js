// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let len=strs.length;
    if(len<=1 || !strs[len-1]) {
    	return strs[len-1];
    }
    let count=0;
    let i=0;
    while(i<strs[0].length) {
      let tempStr='';
      for(let j=0; j<len; j++) {
        if(j===0){
          tempStr=strs[0].split('')[i];
        } else if(tempStr===strs[j].split('')[i]) {
          continue;
        } else {
          return strs[0].substr(0,count);
        }
      }
      i++;
      count++;
    }
    return strs[0].substr(0,count);
};