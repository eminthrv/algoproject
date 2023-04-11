const array1 = [7, 4, 3];
const array2 = [5, 6, 4];

const list1 = {
  head: {
    val: 3,
    next: {
      val: 4,
      next: {
        val: 7,
        next: null,
      },
    },
  },
};

const list2 = {
  head: {
    val: 4,
    next: {
      val: 6,
      next: {
        val: 5,
        next: null,
      },
    },
  },
};

// function ListNode(val, next) {
//   this.val = val //=== undefined ? 0 : val;
//   this.next = next //=== undefined ? null : next;
// }
class ListNode {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}
//^^ these above will both work for creading listnodes

var addTwoNumbers = function (l1, l2, carry) {
  if (!l1 && !l2 && !carry) return null; // here if nothing is inside the parameters, return null, exits recursion??
// down there, they're making sure each node and the carry actually has something, if its undefined or "false", you just substitute with 0; then all parametrs get added up
  var total = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + (carry || 0); 
  carry = Math.trunc(total / 10);
  return new ListNode(total % 10, addTwoNumbers(l1?.next, l2?.next, carry));
  //that question mark above in the addTwoNumbers is Optional chaining, makes the parameter undefined if there is nothing there instead of throw error
};

console.log(addTwoNumbers(list1.head, list2.head));
console.log(18%10)
console.log( Math.trunc(10 / 10))


//writeup
// 743
// 564
// sum is 1307

// 7 + 5 = 12
// carry = total / 10;, so carry will be 1.2
// int val = total % 10; so val(?) will be 2

// starts with 3 and 4, total is 7, no carryover

// now let’s look at the return statement at the end. we start off the new linked list with the new node added upfront being 7, which is total%10, which is just 7 because its the remainder of dividing by 10. For the rest of the list, we shove the following back into addTwoNumbers… 
// l1?.next, l2?.next, carry
// the question marks (optional chaining) make it so that  in case one of the .next of provided linked lists are null or something, it’ll feed “undefined” into the function so that the code can still run

// from there, it should keep chaining up a linked list inside that return statement, then spit out the completed linked list with out sum once it’s done

// then we go to 4 and 6, total is 10, 
// we already have a linked list with 7 loaded up front, next digit in there will be 0 due to the % thing, with a carryover of 1. 

// next we do 7 and 5, total is 12 + 1 from carryover, so 13. so 13%10 is 3, we get carryover of 1. Although we are now out of numbers in our linked lists, we still have the 1 from the carryover, so 0+0+1 is 1. so we add 1 to the new linked list. Now, we see that carryover is 0, l1 and l2 are undefined, so we will hit our base case, ending the recursion. the linked list goes 7,0,3,1 since linked lists work opposite in this problem for some goddamn reason 

