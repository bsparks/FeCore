import LinkedList from './linkedList';

class TreeNode {
    constructor(data, parent = null) {
        this.data = data;
        this.parent = null;
        this.children = new LinkedList();

        if (parent) {
            parent.add(this);
        }
    }

    add(data) {
        let node = (data instanceof TreeNode) ? data : new TreeNode(data);

        this.children.add(node);

        return node;
    }


}

export default TreeNode;
