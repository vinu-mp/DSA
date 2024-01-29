/*
 * @lc app=leetcode id=141 lang=javascript
 *
 * [141] Linked List Cycle
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {

   // let slow = head
  // let fast = head
  // console.log(head.next);
  // while (fast && fast.next && fast.next.next) {
  //     slow = slow.next
  //     fast = fast.next.next
  //     if (slow === fast) {
  //         return true
  //     }
  // }

  // return false
  
  let current = head, set = new Set();
  while(current) {
    if(set.has(current)) {
      return true;
    }
    set.add(current, true);
    current = current.next
  }

  return false;
};
// @lc code=end

