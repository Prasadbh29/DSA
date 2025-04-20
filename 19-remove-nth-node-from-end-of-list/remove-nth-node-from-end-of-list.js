class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

var removeNthFromEnd = function(head, n) {
  let dummy = new ListNode(0, head); // dummy node before head
  let fast = dummy;
  let slow = dummy;

  // Move fast n+1 steps ahead to maintain a gap of n between fast and slow
  for (let i = 0; i <= n; i++) {
    fast = fast.next;
  }

  // Move both fast and slow until fast reaches the end
  while (fast !== null) {
    fast = fast.next;
    slow = slow.next;
  }

  // Now slow.next is the node to remove
  slow.next = slow.next.next;

  return dummy.next; // return head of modified list
};
