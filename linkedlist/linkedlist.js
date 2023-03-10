class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // Push method of LinkedList

    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }


    // Print all the element of LinkedList

    print() {

        let current = this.head;
        const arr = new Array();

        while (current) {
            arr.push(current.val);
            current = current.next;
        }
        return arr;
    }
    // Pop out the element from the linked list

    pop() {

        if (!this.head) return undefined;

        let current = this.head;
        let last = current;
        while (current.next) {
            last = current;
            current = current.next;
        }
        this.tail = last;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return this;
    }



    // Remove element from the start of the list

    shift() {

        let newHead = this.head;
        if (!this.head) {
            return undefined;
        } else {
            this.head = newHead.next;
        }
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return this;
    }

    // Add element to the start of the array

    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;

    }

    // Get the node present at the given index;

    get(index) {
        if (index < 0 || index >= this.length) return undefined;
        let current = this.head;
        let count = 0;
        while (count !== index) {
            current = current.next;
            count++;
        }
        return current;

    }

    // Update the value at the given index

    set(val, index) {
        if (index < 0 || index >= this.length) return !!undefined;
        let nodeToBeUpdated = this.get(index);
        if (nodeToBeUpdated) {
            nodeToBeUpdated.val = val;
            return true;
        }
        return false;
    }

     // Insert the value at the given index
    
     insert(idx,val){
        if (idx < 0 || idx >= this.length){
             return !!undefined;            
        }else if (idx === 0 ){
            this.unshift(val);
        } else if(idx === this.length-1){
            this.push(val);
        }else{ 
            let newNode = new Node(val);
            let prevNode = this.get(idx-1);
            let currentNode = this.get(idx);
            newNode.next = currentNode;
            prevNode.next = newNode;
        }
        this.length++;
        return true;
        
    }

     // Remove from the give index

     remove(idx){
        
        if(idx < 0 || idx >= this.length){
             return !!undefined;            
        }else if (idx === 0 ){
            return this.shift();
        } else if(idx === this.length-1){
            return this.pop();
        }else{ 
            
            let prevNode = this.get(idx-1);
            let currentNode = prevNode.next;
            prevNode.next = currentNode.next;
            this.length--;
            return true;
            
        }
        return false;
        
    }
   




}

const obj = new LinkedList();