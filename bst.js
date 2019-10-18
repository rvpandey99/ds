class Node {
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor(){
        this.root = null;
    }
    insert (data) {
        const node = this.root;
        if (node === null){
            this.root = new Node(data);
            return;
        }
        const searchTree = function (node) {
            if (data < node.data){
                if (node.left == null){
                    node.left = new Node(data);
                    return;
                } else if (node.left !== null){
                    return searchTree(node.left);
                }
            }
            if (data > node.data){
                if (node.right == null){
                    node.right = new Node(data);
                    return;
                } else if (node.right !== null){
                    return searchTree(node.right);
                }
            }
            if (data === node.data){

                return null;
            }
        }
        searchTree(node);
    }

    contains (data){
        const node = this.root;
        if (node === null){
            return false;
        }
        const searchTree = function (node) {
            if (data === node.data){
                return true;
            } else
            if (data < node.data){
                if (node.left === null){
                    return false;
                } else if (node.left !== null){
                    return searchTree(node.left);
                }
            } else
            if (data > node.data){
                if (node.right === null){
                    return false;
                } else if (node.right !== null){
                    return searchTree(node.right);
                }
            }
        }
        return searchTree(node);
    }
}

module.exports = BST;