var reverseList = function(head) {
  var prev = null;
  var cur = head;
  while (cur != null) {
    var next;
    next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }
  head = prev;
  return head;
};

// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL
