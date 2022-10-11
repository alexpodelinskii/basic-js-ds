const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  node = null;

  root() {
    return this.node;
  }

  add(data) {

    this.node = addNewNode(this.node, data)

    function addNewNode(node, data) {
      if (!node) {
        return new Node(data)
      }

      if (node.data === data) {
        return node
      }

      if (data < node.data) {
        node.left = addNewNode(node.left, data)
      } else {
        node.right = addNewNode(node.right, data)
      }
      return node

    }
  }

  has(data) {

    return seachNode(this.node, data)

    function seachNode(node, data) {
      if (!node) {
        return false
      }

      if (node.data === data) {
        return true
      }

      if (data < node.data) {
        return seachNode(node.left, data)
      } else {
        return seachNode(node.right, data)
      }

    }
  }

  find(data) {

    return getNode(this.node, data)

    function getNode(node, data) {
      if (!node) {
        return null
      }
      if (node.data === data) {
        return node
      }
      if (data < node.data) {
        return getNode(node.left, data)
      } else {
        return getNode(node.right, data)
      }

    }
  }

  remove(data) {
    this.node = removeNode(this.node, data)

    function removeNode(node, data) {
      if (!node) {
        return node
      }
      if (data === node.data) {
        if (!node.left && !node.right) {
          return null
        } else if (!node.left) {
          node = node.right
          return node
        } else if (!node.right) {
          node = node.left
          return node
        } else {
          let temp = node.left
          while (temp.right) {
            temp = temp.right
          }
          node.data = temp.data
          node.left = removeNode(node.left, temp.data)
          return node
        }
      } else if (data < node.data) {
        node.left = removeNode(node.left, data)
        return node

      } else if (data > node.data) {
        node.right = removeNode(node.right, data)
        return node
      }


    }
  }

  min() {
    if (!this.node) {
      return null
    }
    let current = this.node
    while (current.left) {
      current = current.left
    }
    return current.data
  }

  max() {
    if (!this.node) {
      return null
    }
    let current = this.node
    while (current.right) {
      current = current.right
    }
    return current.data
  }

}

module.exports = {
  BinarySearchTree
};