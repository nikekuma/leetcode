// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:

// string convert(string s, int numRows);
 

// Example 1:

// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"
// Example 2:

// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:
// P     I    N
// A   L S  I G
// Y A   H R
// P     I
// Example 3:

// Input: s = "A", numRows = 1
// Output: "A"

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows < 2) {
        return s;
    }
    let path = [];
    let strArr = s.split('');
    let len = s.length;
    let i = 0;
    let j = 0;
    let z = 0;
    let ans = '';
    while(i < numRows) {
      path.push([]);
      i++;
    }
    i = 0;
    while(i < len) {
        while(j < numRows) {
          path[j][z] = strArr[i];
        i++;
           j++;
      }
      z++;
      j--;
      j--;
      while(j > 0) {
          path[j][z] = strArr[i];
        i++;
          z++;
        j--;
      }
    }
    for (let i = 0; i < numRows; i++) {
        path[i].forEach((item) => {
          if (item) {
            ans += item;
        }
      })
    }
    return ans;
  };

  /**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if (numRows < 2) {
  	return s;
  }
  let path = [];
  let strArr = s.split('');
  let len = s.length;
  let i = 0;
  let row = 0;
  let dir = 0;
  let ans = '';
  while(i < numRows) {
    path.push([]);
    i++;
  }
  i = 0;
  while(i < len) {
  	row += dir;
  	path[row] += strArr[i];
    if (row === 0 || row === (numRows - 1)) {
    	dir = dir === 0 ? 1 : -dir;
    }
    i++;
  }
  i = 0;
  while(i < path.length) {
    ans += path[i];
    i++;
  }
  return ans;
};