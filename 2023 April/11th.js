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
  if (!l1 && !l2 && !carry) return null;

  var total = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + (carry || 0);
  carry = parseInt(total / 10);
  return new ListNode(total % 10, addTwoNumbers(l1?.next, l2?.next, carry));
};

console.log(addTwoNumbers(list1.head, list2.head));
