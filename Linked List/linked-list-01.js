//introduction to the linked list

// step 1 : create node

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// step 2 : create the pointers in linked list
// step 3 : write the functions in the linked list

class LinkedList {
  constructor() {
    this.head = null; // pointer at first node of linked list
    this.tail = null; // pointer at the last node of the linked list
  }

  add(data) {
    let newnode = new Node(data); // naya node banao

    if (this.head === null) {
      this.head = newnode; // head ko naye node pe point karwao agar wo null pe set hai toh
    } else {
      this.tail.next = newnode; // warna tail jis node pe point karrha hai uske next se newnode ko point karwa do
    }

    this.tail = newnode; // finally, agar kuch nahi hai toh, tail ko newnode se point kardo
  }

  printAll() {
    let current = this.head; // naya node banao aur usko jahan head hai ussi node pe point karao

    while (current !== null) {
      console.log(current.data); // current node ka data print karo
      current = current.next; // aur pointer to next node pe move karo
    }
  }

  getDataOfAnySpecificNode(index) {
    let current = this.head;
    let i = 0;
    while (i < index) {
      current = current.next;
      i++;
    }

    return current.data;
  }

  insertNodeAtSpecificPosition(index, data) {
    if (index === 0) {
      const newnode = new Node(data);
      newnode.next = this.head;
      this.head = newnode;
    } else {
      let current = this.head;
      let previous = null;
      let i = 0;

      while (i < index) {
        previous = current;
        current = current.next;
        i++;
      }

      const newnode = new Node(data);
      newnode.next = current;
      previous.next = newnode;
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
    }
  }
}

// we can test it now

const list = new LinkedList();

list.add(10);
list.add(20);
list.add(30);
list.add(40);
list.add(50);

list.insertNodeAtSpecificPosition(3, 1120);

//list.printAll();  // output : 10 20 30 1120 40 50

list.deleteNode(3);

//list.printAll(); // output : 10 20 30 40 50
