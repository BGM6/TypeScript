var _Node = /** @class */ (function () {
    function _Node(val) {
        this.val = val;
        this.next = null;
    }
    return _Node;
}());
var SinglyLinkedList = /** @class */ (function () {
    function SinglyLinkedList() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    SinglyLinkedList.prototype.push = function (val) {
        var newNode = new _Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    };
    SinglyLinkedList.prototype.pop = function () {
        if (!this.head)
            return undefined;
        var current = this.head;
        var newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    };
    SinglyLinkedList.prototype.shift = function () {
        if (!this.head)
            return undefined;
        //if list is not empty and there is more than one node in the list
        //node1 => node2 => node3
        var currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return currentHead;
    };
    SinglyLinkedList.prototype.unshift = function (val) {
        var newNode = new _Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }
        else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    };
    return SinglyLinkedList;
}());
var list = new SinglyLinkedList();
// list.push('second');
// list.push('third');
// console.log(list.pop());
// console.log(list.shift())
console.log(list);
