// Given a string s, return the longest palindromic substring in s.

 

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"
// Example 3:

// Input: s = "a"
// Output: "a"
// Example 4:

// Input: s = "ac"
// Output: "a"


/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let maxObj = {};
    let max = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < s.length; i++) {
    	for (let j = 0; j < s.length; j++) {
        if(isPalindrome(s, i, j)) {
            if(max < Math.max(max, (j - i) + 1)) {
                maxObj.i = i;
                maxObj.j = j;
            }
            max = Math.max(max, (j - i) + 1);
            maxObj.max = max;
        } 
      }
    }
    return s.substr(maxObj.i, maxObj.max);
};

var isPalindrome = function(s, i, j) {
    if(i === j) {
  	return true;
    }
    let leftptr = i;
    let rightptr = j;
    while (leftptr < rightptr) {
        if(s[leftptr] !== s[rightptr]) {
            return false;
        }
        leftptr++;
        rightptr--;
    }
    return true;
}


/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
	let start = 0;
    let end = 0;
    let maxLen = 0;
    for (let i = 0; i < s.length - 1; i++) {
      maxLen = Math.max(check(s, i, i), check(s, i, i + 1));
      if (maxLen > (end - start)) {
      	start = i - Math.floor((maxLen - 1)/2);
        end = i + Math.floor(maxLen/2);
      }
    }
    return s.substr(start, (end - start + 1));
};

var check = function(s, i, j) {
	while(i >=0 && j < s.length) {
  	if (s[i] !== s[j]) {
    	break;
    } else {
     	i--;
    	j++;
    }
  }
  return j - i - 1;
}

var longestPalindrome = function(s) {
	let matrix = new Array(s.length).fill(0).map(() => new Array(s.length).fill(0));
	let len = 0;
  for (let g = 0; g < s.length; g++) {
    for (let i = 0, j = g; j < s.length; i++, j++) {
    	if (g === 0) {
      	matrix[i][j] = true;
      } else if (g === 1) {
      	if (s[i] === s[j]) {
    			matrix[i][j] = true;
        } else {
          matrix[i][j] = false;
        }
      } else {
      	if (s[i] === s[j] && matrix[i + 1][j - 1] === true) {
      		matrix[i][j] = true
        } else {
          matrix[i][j] = false;
        }
      }
      if (matrix[i][j]) {
      	len = g + 1;
      }
  	}
  }
  return len;
};