/*

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.



*/
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
const addTwoNumbers = function (l1, l2) {
  let head = new ListNode(0);
  let current = head;
  let carry = 0;

  while (l1 || l2) {
    if (!l1 && !l2) return null;

    const sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
    carry = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10);

    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
    current = current.next;
  }

  if (carry > 0) {
    current.next = new ListNode(carry);
  }
  return head.next;
};

const l1 = createLinkedListFromArray([2, 4, 3]);
const l2 = createLinkedListFromArray([5, 6, 4]);
const result = addTwoNumbers(l1, l2);

console.log(convertLinkedListToArray(result));

// helper function

function createLinkedListFromArray(arr) {
  let head = new ListNode(0);
  let current = head;

  for (let num of arr) {
    current.next = new ListNode(num);
    current = current.next;
  }
  return head.next;
}

function convertLinkedListToArray(head) {
  let current = head;
  const result = [];

  while (current) {
    result.push(current.val);
    current = current.next;
  }

  return result;
}
