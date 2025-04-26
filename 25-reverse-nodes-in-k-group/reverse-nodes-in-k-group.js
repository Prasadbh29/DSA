/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    if (!head || k === 1) return head;
    
    // Helper to get the k-th node from current node
    const getKthNode = (curr, k) => {
        while (curr && k > 0) {
            curr = curr.next;
            k--;
        }
        return curr;
    };
    
    const dummy = new ListNode(0);
    dummy.next = head;
    
    let groupPrev = dummy;
    
    while (true) {
        const kth = getKthNode(groupPrev, k);
        if (!kth) break; // If less than k nodes, stop
        
        const groupNext = kth.next;
        
        // Reverse the group
        let prev = kth.next;
        let curr = groupPrev.next;
        
        while (curr !== groupNext) {
            const tmp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = tmp;
        }
        
        // Connect previous part with reversed group
        const tmp = groupPrev.next;
        groupPrev.next = kth;
        groupPrev = tmp;
    }
    
    return dummy.next;
};
