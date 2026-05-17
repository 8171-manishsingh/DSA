// Dynamic Allocation (example)
// This file contains a Linked List implementation saved as “dynamic allocation”.

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(data) {
        const newNode = new Node(data);

        if (this.head === null) {
            this.head = newNode;
            return;
        }

        let temp = this.head;
        while (temp.next !== null) {
            temp = temp.next;
        }
        temp.next = newNode;
    }

    display() {
        let temp = this.head;
        let result = '';

        while (temp !== null) {
            result += temp.data + ' -> ';
            temp = temp.next;
        }

        console.log(result + 'null');
    }

    insertAtBeginning(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    search(key) {
        let temp = this.head;

        while (temp !== null) {
            if (temp.data === key) {
                console.log('Element Found:', key);
                return true;
            }
            temp = temp.next;
        }

        console.log('Element Not Found');
        return false;
    }

    deleteNode(key) {
        let temp = this.head;
        let prev = null;

        if (temp !== null && temp.data === key) {
            this.head = temp.next;
            console.log('Deleted:', key);
            return;
        }

        while (temp !== null && temp.data !== key) {
            prev = temp;
            temp = temp.next;
        }

        if (temp === null) {
            console.log('Element Not Found');
            return;
        }

        prev.next = temp.next;
        console.log('Deleted:', key);
    }

    reverse() {
        let prev = null;
        let current = this.head;
        let next = null;

        while (current !== null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }

        this.head = prev;
    }
}

// Demo
const list = new LinkedList();

list.append(10);
list.append(20);
list.append(30);

console.log('Original List:');
list.display();

list.insertAtBeginning(5);
console.log('After Insert at Beginning:');
list.display();

list.search(20);

list.deleteNode(20);
console.log('After Deletion:');
list.display();

list.reverse();
console.log('After Reverse:');
list.display();

