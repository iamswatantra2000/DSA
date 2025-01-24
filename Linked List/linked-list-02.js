// it's all about doubly linked list

class doublyNode {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  add(data) {
    const newnode = new doublyNode(data);

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

  getData(index) {
    let current = this.head;
    let i = 0;
    while (i < index) {
      current = current.next;
      i++;
    }

    return current.data;
  }

  insertNodeAtSpecificPosition(index, data) {
    let newnode = new doublyNode(data);

    if (index === 0) {
      newnode.next = this.head;
      this.head = newnode;
    }
    {
      let current = this.head;
      let previous = null;
      let i = 0;

      while (i < index) {
        previous = current;
        current = current.next;
        i++;
      }

      previous.next = newnode;
      current.prev = newnode;
      newnode.prev = previous;
      newnode.next = current;
    }
  }

  deleteNode(index) {
    if (index === 0) {
      let current = this.head;
      this.head = this.head.next;
      current.next = null;
    } else {
      let current = this.head;
      let previous = null;
      let i = 0;

      while (i < index) {
        previous = current;
        current = current.next;
        i++;
      }

      previous.next = current.next;
      current.next = null;
      current.prev = null;
    }
  }
}


const list = new DoublyLinkedList();

list.add(10);
list.add(20);
list.add(30);
list.add(40);
list.add(50);

console.log(list.getData(3));