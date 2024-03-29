class Node {
  constructor(val) {
    this.val = val
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }
  push(val) {
    var newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = this.head
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length++
    return this
  }
  traverse() {
    var current = this.head;
    while (current) {
      console.log(current)
      current = current.next
      // console.log(current)
    }
  }
}
// console.log(this)

let list = new SinglyLinkedList()
list.push('hello')
list.push('idiot')
list.traverse()
