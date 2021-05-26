// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.
// Example 1:
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
// Example 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]
// Example 3:

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let output;
    let pointer;
    let prevremender = 0;
    let currremender = 0;
     while (l1 || l2) {
        let sum = ((l1 ? l1.val : 0) + (l2 ? l2.val : 0));
        currremender = (sum + prevremender) > 9 ? Math.floor((sum + prevremender)/10) : 0;
         if (output) {	
             pointer.next = new ListNode((sum + prevremender) % 10, null);
             pointer = pointer.next
         } else {
         			
             output = new ListNode((sum + prevremender) % 10, null);
             pointer = output;
             
         }
        prevremender = currremender;
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    } 
    if (prevremender) {
    	pointer.next = new ListNode(prevremender, null);
    }
    return output;
};