// slow and fast pointer approach in linked list

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

  // question 1: finding the middle element of the linked list
  getTheMiddleNode() {
    if (this.head === null) {
      return null;
    }
    let slow = this.head; // run with one step
    let fast = this.head; // run with two step

    // while condition handling the checks that fast.next.next is not null and fast is not null
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }

    return slow.data;
  }

  //question 2: create the cycle in linked list and check wheather the cycle is present or not
  createCycle() {
    if (this.head === null) return;

    let current = this.head;
    let tail = null;

    while (current.next !== null) {
      tail = current;
      current = current.next;
    }

    current.next = tail.next;
  }

  hasCycle() {
    let slow = this.head;
    let fast = this.head;

    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;

      if (slow === fast) {
        return true;
      }
    }
    return false;
  }
}

let list = new LinkedList();

list.add(10);
list.add(20);
list.add(30);
list.add(40);
list.add(50);

list.printAll();

console.log(list.getTheMiddleNode());

list.createCycle();

if (list.hasCycle()) {
  console.log("yes, it has a cycle");
} else {
  console.log("No, it does not have cycle");
}
