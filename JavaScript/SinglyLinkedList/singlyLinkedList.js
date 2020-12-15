// create linked list with no built -in methods

// Create Node to add to list
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Create SLL
class SinglyLinkedList {
  // init method
  constructor(value) {
    this.head = new Node(value);
  }
  // add node to end of list
  addToBack = value => {
    let runner = this.head;
    while(runner) {
      if (runner.next === null){
        runner.next = new Node(value);
        return this;
      }
      runner = runner.next;
    }
    return this;
  }
  // add node to front of list
  addToFront = value => {
    let runner = this.head;
    this.head = new Node(value);
    this.head.next = runner;
    return this;
  }
  // display values 
  printValues = _=> {
    let runner = this.head;
    const list = [];
    while (runner) {
      list.push(runner.value);
      console.log(`current node is ${runner.value} next node is ${runner.next}`);
      runner = runner.next;
    }
    console.log(list);
    return this;
  }
  // remove last node
  removeBack = _=> {
    let runner = this.head;
    while(runner.next) {
      if (runner.next.next === null) {
        runner.next = null;
        return this;
      }
      runner = runner.next;
    }
    return this;
  }
  // remove first node
  removeFront = _=> {
    if (this.head.next === null) {
      return this;
    }
    this.head = this.head.next;
    return this;
  }
}

const result = new SinglyLinkedList(10);
result.addToBack(12).addToFront(8).addToBack(14).addToBack(16).removeBack().removeBack().removeFront().printValues();