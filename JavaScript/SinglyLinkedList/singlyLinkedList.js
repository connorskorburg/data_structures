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
  // insert value at index
  insertValue = (value, idx) => {
    let runner = this.head;
    let i = 0;
    while(runner && idx !== undefined) {
      if (idx == 0) {
        this.addToFront(value);
        return this;
      }
      if (i + 1 === idx) {
        let newNode = new Node(value);
        let next = runner.next;
        runner.next = newNode;
        newNode.next = next;
        return this;
      }
      runner = runner.next;
      i++;
    }
    return this;
  }
  // remove index
  removeIndex = idx => {
    let runner = this.head;
    if (idx < 0) {
      return this;
    } 
    if (idx === 0) {
      this.removeFront();
      return this;
    }
    let i = 0;
    while(runner){
      if (i + 1 === idx) {
        runner.next = runner.next.next;
        return this;
      }
      runner = runner.next;
      i++;
    }
    return this;
  }
  // remove first instance of value
  removeValue = value => {
    let runner = this.head;
    if (runner.value === value) {
      this.removeFront();
      return this;
    }
    while(runner.next) {
      if (runner.next.value === value) {
        runner.next = runner.next.next;
        return this;
      }      
      runner = runner.next;
    }
    return this;
  }
}


exports.SinglyLinkedList = SinglyLinkedList;
exports.Node = Node;