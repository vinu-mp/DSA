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
  // Iterative
  // let prev = null;
  // let cur = head
  // while(cur) {
  //   let temp = cur.next;
  //   cur.next = prev;
  //   prev = cur
  //   cur = temp
  //   console.log(prev)
  // }
  // head = prev;
  // return head;


  // Recursive
  if(!head || !head.next) return head;
  let newHead = reverseList(head.next);
  head.next.next = head;
  head.next = null
  
return newHead
};

// 1->2->3->4->5->null => null=>1 2->3
// 5->4->3->2->1->null
// @lc code=end

