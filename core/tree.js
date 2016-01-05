import Queue from './queue';
import TreeNode from './treeNode';

class Tree {
    constructor(data) {
        this.root = new TreeNode(data);
    }

    traverseDepthFirst(callback) {
        (function recurse(node) {
            callback(node);

            node.children.forEach(recurse);
        })(this.root);
    }

    traverseBreadthFirst(callback) {
        let queue = new Queue();
        let currentNode = this.root;

        while (currentNode) {
            callback(currentNode);

            currentNode.children.forEach(node => queue.enqueue(node));

            currentNode = queue.dequeue();
        }
    }
}

export default Tree;
