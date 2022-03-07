
var addTwoNumbers = function(l1, l2) {
    
    let sumList = new ListNode(0)
    console.log(sumList)
    let sumListHead = sumList
    let carry = 0

    while (l1 || l2) {
        let sum;
        if (l1 && l2) {
            let val1 = l1.val
            let val2 = l2.val
            sum = val1 + val2 + carry
        } else {
            sum = l1 ? l1.val + carry : l2.val + carry
        }
        
        carry = Math.floor(sum / 10)

        let newNodeVal = (sum % 10)
        sumList.next = new ListNode (newNodeVal)
        sumList = sumList.next
        
        if (l1) l1 = l1.next
        if (l2) l2 = l2.next
    }
    
    if (carry) {
        sumList.next = new ListNode(carry)
    }
    
    return sumListHead.next
};