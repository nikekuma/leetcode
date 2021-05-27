// Given a string s, find the length of the longest substring without repeating characters.

 

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
// Example 4:

// Input: s = ""
// Output: 0

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let length = s.length;
    let maxCount = 0;
    let i = 0;
    let j = 0;
    let hashMap = {};
    while (j < length) {
    	if (!hashMap[s[j]] && hashMap[s[j]] !== 0) {
      	hashMap[s[j]] = j;
        j++;
        maxCount = Math.max(Object.getOwnPropertyNames(hashMap).length, maxCount);
      } else {
      	delete hashMap[s[i]];
        i++;
      }
    }
    return maxCount;
};