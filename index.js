function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(value, prev, next) {
  this.value = value;
  this.prev = prev;
  this.next = next;
}

//adds a node to the head
LinkedList.prototype.addToHead = function(value) {
  let nodeList = new Node(value, null, this.head);
  if (this.head) this.head.prev = nodeList;
  else this.tail = nodeList;
  this.head = nodeList;
};

//adds a node to the tail
LinkedList.prototype.addToTail = function(value) {
  let nodeList = new Node(value, this.tail, null);
  if (this.tail) this.tail.next = nodeList;
  else this.head = nodeList;
  this.tail = nodeList;
};

//removes the node at head and returns its value
LinkedList.prototype.removeHead = function() {
  if (!this.head) return null;
  let currentValue = this.head.value;
  this.head = this.head.next;
  if (this.head) this.head.prev = null;
  else this.tail = null;
  return currentValue;
};

//removes the node at the tail and returns its value
LinkedList.prototype.removeTail = function() {
  if (!this.tail) return null;
  let currentValue = this.tail.value;
  this.tail = this.tail.prev;
  if (this.tail) this.tail.next = null;
  else this.head = null;
  return currentValue;
};

//finds if a value exists in a node and returns true or false
LinkedList.prototype.search = function(value) {
  let currentNode = this.head;
  while (currentNode) {
    if (currentNode.value === value) return true;
    currentNode = currentNode.next;
  }
  return false;
};

//finds all the index of a value
LinkedList.prototype.indexOf = function(searchValue) {
  let indexes = [];
  let currentNode = this.head;
  let index = 0;
  while (currentNode) {
    if (currentNode.value === searchValue) indexes.push(index);
    index++;
    currentNode = currentNode.next;
  }
  return indexes;
};
