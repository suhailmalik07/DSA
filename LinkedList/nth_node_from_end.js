// Given a Linked List and a number n, write a function that returns the value at the 
// n’th node from the end of the Linked List.

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

    getNthNodeFromLast(n) {
        let size = 0
        let curr = this.head

        while (curr != null) {
            curr = curr.next
            size++
        }

        let toPrint = size - n - 1

        if (toPrint < 0 || toPrint > size) {
            return undefined
        }

        curr = this.head
        while (toPrint > 0) {
            curr = curr.next
            toPrint--
        }
        return curr.val
    }

    print() {
        let curr = this.head
        while (curr != null) {
            console.log(curr.val)
            curr = curr.next
        }
    }
}

const ll = new LinkedList()
ll.append(1, 2, 3)
ll.append(4)

console.log(ll.getNthNodeFromLast(2))
