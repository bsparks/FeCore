import LinkedList from './linkedList';

class Queue {
    constructor() {
        this._list = new LinkedList();
    }

    enqueue(data) {
        this._list.add(data);
    }

    dequeue() {
        if(!this._list.isEmpty()) {
            let node = this._list.head;
            this._list.removeNode(this._list.head);

            return node.data;
        }

        return undefined;
    }

    peek() {
        return this._list.head.data;
    }

    isEmpty() {
        return this.size === 0;
    }

    get size() {
        return this._list.size;
    }
}

export default Queue;
