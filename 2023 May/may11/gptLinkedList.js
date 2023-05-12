let Node = function(data, next = null) {
    return { data, next };
  }
  
  let LinkedList = function() {
    let head = null;
    
    return {
      insertFirst: function(data) {
        head = Node(data, head);
      },
      size: function() {
        let count = 0;
        let node = head;
        while(node) {
          count++;
          node = node.next;
        }
        return count;
      },
      getFirst: function() {
        return head;
      },
      getLast: function() {
        if(!head) {
          return null;
        }
  
        let node = head;
        while(node) {
          if(!node.next) {
            return node;
          }
          node = node.next;
        }
      },
      clear: function() {
        head = null;
      },
      removeFirst: function() {
        if(!head) {
          return;
        }
        head = head.next;
      },
      removeLast: function() {
        if(!head) {
          return;
        }
  
        if(!head.next) {
          head = null;
          return;
        }
  
        let prev = head;
        let node = head.next;
  
        while(node.next) {
          prev = node;
          node = node.next;
        }
  
        prev.next = null;
      },
      insertLast: function(data) {

       

         function getFinal() {
          if(!head) {
            return null;
          }
    
          let node = head;
          while(node) {
            if(!node.next) {
              return node;
            }
            
            node = node.next;
          }
        }

        const last = this.getFinal();
        
        if(last) {
          last.next = Node(data);
        } else {
          head = Node(data);
        }
      },
      getAt: function(index) {
        let counter = 0;
        let node = head;
  
        while(node) {
          if(counter === index) {
            return node;
          }
  
          counter++;
          node = node.next;
        }
        return null;
      },
      removeAt: function(index) {
        if(!head) {
          return;
        }
  
        if(index === 0) {
          head = head.next;
          return;
        }
  
        const prev = this.getAt(index - 1);
        if(!prev || !prev.next) {
          return;
        }
        prev.next = prev.next.next;
      },
      insertAt: function(data, index) {
        if(!head) {
          head = Node(data);
          return;
        }
  
        if(index === 0) {
          head = Node(data, head);
          return;
        }
  
        const prev = this.getAt(index - 1) || this.getLast();
        const node = Node(data, prev.next);
        prev.next = node;
      },
    };
  }
  