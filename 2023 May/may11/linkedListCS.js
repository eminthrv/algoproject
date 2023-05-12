function LinkedList() {
    this.head = null;
    this.tail = null;
  }
  
  function Node(val) {
    this.value = val;
    this.next = null;
  }
  
  // adds node to end of list
  LinkedList.prototype.push = function(value) {
    //initialize the new node
    //tail.next =value
    //value.next = null
  
    // what is tail when list size is 1?
  
    let newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      return this.tail;
    } 
  
    while (this.head.next !== null) {
      this.head = this.head.next
    }
    
    this.head.next = newNode;
  
    this.tail = this.head.next
    return this.tail;
  
    // 1
    // 1 -> 2
  
  };
  
  test = new LinkedList();
  test.push("asdf")
  test.push("hello")
  console.log(test)
  
  // returns true if value is present in the list
  LinkedList.prototype.contains = function(value) {
    //traverse thru the entire linked linked list
    // if any of the value === this.value, return true
    
  };
  
  // Bonus
  // adds node to beginning of list
  LinkedList.prototype.addToHead = function(value) {
  
  };
  
  // Extra Bonus
  // insert an item at the position specified
  LinkedList.prototype.insert = function(value, position) {
  
  };
  
  // Extra Bonus
  // remove first occurrence of value from list
  LinkedList.prototype.removeItem = function(value) {
  
  };
  
  // Extra Bonus
  // remove element at specified position in list
  LinkedList.prototype.removePosition = function(position) {
  
  };
  