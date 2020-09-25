// You are given a pointer/ reference to the node which is to be deleted from the linked list of N nodes.
// The task is to delete the node. Pointer/ reference to head node is not given. 
// Note: No head reference is given to you. Expected Time Complexity : O(n) Expected Auxilliary Space : O(n)


class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }

    append(...data) {
        for (let val of data) {
            const node = new Node(val)

            if (this.head == null) {
                this.head = node
            } else {
                let curr = this.head
                while (curr.next != null) {
                    curr = curr.next
                }
                curr.next = node
            }
        }
    }

    deletePointerRef(refNode) {
        while (refNode.next.next != null) {
            refNode.val = refNode.next.val
            refNode = refNode.next
        }
        refNode.val = refNode.next.val
        refNode.next = null
    }

    delete(indx){
        let curr = this.head
        while (indx > 0){
            curr = curr.next
            indx--
        }
        this.deletePointerRef(curr)
    }

    print() {
        let curr = this.head
        const arr = []
        while (curr != null) {
            arr.push(curr.val)
            curr = curr.next
        }
        console.log(arr)
    }
}


const ll = new LinkedList()
ll.append(0, 1, 2, 3, 4, 5)
ll.delete(4)
ll.print()