// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    const heap = [];

    // Helper function to push a node into heap and maintain min-heap property
    const push = (node) => {
        heap.push(node);
        let i = heap.length - 1;
        while (i > 0) {
            let parent = Math.floor((i - 1) / 2);
            if (heap[parent].val <= heap[i].val) break;
            [heap[parent], heap[i]] = [heap[i], heap[parent]];
            i = parent;
        }
    };

    // Helper function to pop the smallest node from the heap
    const pop = () => {
        const top = heap[0];
        const last = heap.pop();
        if (heap.length > 0) {
            heap[0] = last;
            let i = 0;
            while (true) {
                let left = 2 * i + 1;
                let right = 2 * i + 2;
                let smallest = i;
                if (left < heap.length && heap[left].val < heap[smallest].val) smallest = left;
                if (right < heap.length && heap[right].val < heap[smallest].val) smallest = right;
                if (smallest === i) break;
                [heap[i], heap[smallest]] = [heap[smallest], heap[i]];
                i = smallest;
            }
        }
        return top;
    };

    // Initialize the heap with the head of each list
    for (const node of lists) {
        if (node) push(node);
    }

    const dummy = new ListNode(0);
    let current = dummy;

    while (heap.length > 0) {
        const node = pop();
        current.next = node;
        current = current.next;
        if (node.next) {
            push(node.next);
        }
    }

    return dummy.next;
};
