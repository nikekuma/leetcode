var twoSum = function(nums, target) {
    let hashmap = {};
    for (let i = 0; i < nums.length; i++) {
    	hashmap[nums[i]] = i;
    }
    for (let i = 0; i < nums.length; i++) {
    	let reminder = hashmap[target - nums[i]];
    	if (reminder && reminder != i) {
      	return [i, reminder];
      }
    }
};