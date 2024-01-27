/*
 * @lc app=leetcode id=206 lang=javascript
 *
 * [206] Reverse Linked List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if(head === null) return head;
    let current = head;
    let prev = null;
    while(current !== null) {
      let temp = current.next;
      current.next = prev;
      prev = current;
      current = temp;
    }

    // current.next = prev;
    return prev;

};
// @lc code=end

