// Reverse the Linked List

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  add(data) {
    let newnode = new Node(data);

    if (this.head === null) {
      this.head = newnode;
    } else {
      this.tail.next = newnode;
    }

    this.tail = newnode;
  }

  printAll() {
    let current = this.head;

    while (current !== null) {
      console.log(current.data);
      current = current.next;
    }
  }

  reverseLinkedList() {
    if (this.head === null || this.head.next === null) {
      return null;
    }

    let prev = null;
    let current = this.head;

    while (current !== null) {
      let next = current.next;
      current.next = prev;

      prev = current;
      current = next;
    }

    this.head = prev;
  }
}

let list = new LinkedList();

list.add(10);
list.add(20);
list.add(30);
list.add(40);
list.add(50);

list.printAll();

list.reverseLinkedList();

list.printAll();
