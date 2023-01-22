class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}


const obj = new Node(5);
obj.next = new Node(4);
obj.next.next = new Node(3);
