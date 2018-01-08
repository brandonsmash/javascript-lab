function Stack() {
 this.size = 0;
 this.head = null;
}

function Node(data) {
 this.data = data;
 this.next = null;
}

Stack.prototype.push = function(value) {
 var node = new Node(value);
 // first node
 if (!this.head) {
  this.head = node;
 } else {
  // set new node next to the original head node
  node.next = this.head;
  // set head to newly inserted node
  this.head = node;
 }
 // increment size on each insertion
 this.size++;
}

// mock browser history using Stack
var browser = new Stack();
// push data our browser stack
browser.push('www.google.com');
browser.push('www.learnsteady.com');

console.log(browser);