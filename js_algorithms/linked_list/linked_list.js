// Linked Lists
// Prepend O(1)
// Append O(1)
// lookup O(n)
// insert O(n)
// delete O(n)

// 10 -> 5 -> 16

// let myLinkedList = {
//   head: {
//     value: 10,
//     next: {
//       value: 5,
//       next: {
//         value: 16,
//         next: null,
//       },
//     },
//   },
// };

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  // append Func
  append(value) {
    const newNode = new Node(value);

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  // prepend Func
  prepend(value) {
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  //  Print List Func
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
  // Insert Func
  insert(index, value) {
    // Check params
    if (index >= this.length) {
      return this.append(value);
    }
    if (index === 0) {
      this.prepend(value);
      return this.printList();
    }
    const newNode = new Node(value);
    const leader = this.traverseToIndex(index - 1);
    const holdPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdPointer;
    this.length++;
    return this.printList;
  }
  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  // remove Func
  remove(index) {
    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    return this.printList();
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
myLinkedList.insert(20, 88);
console.log(myLinkedList.printList());

myLinkedList.remove(2);

console.log('removed index 2:', myLinkedList.printList());

console.log(myLinkedList);
