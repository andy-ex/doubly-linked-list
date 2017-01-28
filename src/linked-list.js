const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = this._tail = new Node();
    }

    append(data) {
        if (this.length == 0) {
            this._head.data = this._tail.data = data;
        } else {
            this._tail.next = new Node(data, this._tail);
            this._tail = this._tail.next;
        }

        this.length++;

        return this;
    }

    head() {
        return this._head.data;
    }

    tail() {
        return this._tail.data;
    }

    at(index) {
        var node = this._head;
        for (var i = 0; i < index; ++i)
            node = node.next;

        return node.data;
    }

    insertAt(index, data) {
        if (index == this.length)
            this.append(data);

        var prev = null;
        var next = this._head;
        for (var i = 0; i < index; ++i) {
            prev = next;
            next = next.next;
        }

        var newNode = new Node(data, prev, next);

        if (next != null) next.prev = newNode;
        if (prev != null) prev.next = newNode;

        this.length++;

        return this;
    }

    isEmpty() {
        return this.length == 0;
    }

    clear() {
        this.length = 0;
        this._head = this._tail = new Node();

        return this;
    }

    deleteAt(index) {
        var node = this._head;
        for (var i = 0; i < index; ++i) {
            node = node.next;
        }        
        
        if (node.prev) node.prev.next = node.next;
        if (node.next) node.next.prev = node.prev;

        this.length--;

        return this;
    }

    reverse() {
        var node = this._head;
        var next = null;
        for (var i = 0; i < this.length; ++i) {
            next = node.next;
            var temp = node.next;
            node.next = node.prev;
            node.prev = temp;
            node = next;
        }

        var temp = this._head;
        this._head = this._tail;
        this._tail = temp;

        return this;
    }

    indexOf(data) {
        var node = this._head;
        for (var i = 0; i < this.length; ++i) 
            if (node.data == data)
                return i;
            else
                node = node.next;

        return -1;
    }
}

module.exports = LinkedList;
