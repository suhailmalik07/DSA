// Given a linked list of N nodes where nodes can contain values 0s, 1s, and 2s only. The task is to segregate 0s, 1s, and 2s 
// linked list such that all zeros segregate to head side, 2s at the end of the linked list, and 1s in the mid of 0s and 2s. 
// Expected Time Complexity: O(N). Expected Auxiliary Space: O(1)

class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

const createLL = (...args) => {
    const head = new Node(args[0])
    let curr = head

    for (let i = 1; i < args.length; i++) {
        curr.next = new Node(args[i])
        curr = curr.next
    }

    return head
}

const printLL = head => {
    let curr = head
    const arr = []
    while (curr != null) {
        arr.push(curr.val)
        curr = curr.next
    }
    console.log(arr);
}

const segregateNodes = head => {
    let cnt = [0, 0, 0]

    let curr = head
    while (curr != null) {
        cnt[curr.val]++
        curr = curr.next
    }

    curr = head
    for (let i = 0; i < 3; i++) {
        while (cnt[i] > 0) {
            curr.val = i
            curr = curr.next
            cnt[i]--
        }
    }

    return head
}

const ll = createLL(1, 0, 2, 1, 0, 1)
printLL(ll)
segregateNodes(ll)
printLL(ll)