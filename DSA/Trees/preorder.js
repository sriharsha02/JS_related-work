class Node {
  constructor(value) {
      this.val = value;
      this.leftChild = null;
      this.rightChild = null;
  }

}
class BinarySearchTree {
  constructor(rootValue) {
      this.root = new Node(rootValue);
  }

  insert(currentNode, newValue) {
      if (currentNode === null) {
          currentNode = new Node(newValue);
      } else if (newValue < currentNode.val) {
          currentNode.leftChild = this.insert(currentNode.leftChild, newValue);
      } else {
          currentNode.rightChild = this.insert(currentNode.rightChild, newValue);
      }
      return currentNode;
  }

  insertBST(newValue) {
      if(this.root==null){
          this.root=new Node(newValue);
          return;
      }
      this.insert(this.root, newValue);
  }

  preOrderPrint(currentNode) {
      if (currentNode!==null) {
          console.log(currentNode.val);
          this.preOrderPrint(currentNode.leftChild);
          this.preOrderPrint(currentNode.rightChild);
      }

  }
  preOrderPrint(currentNode) {
    //if the currentNode IS NOT EQUAL to null
      if (currentNode!==null) {
          //print its value
          console.log(currentNode.val);
          //make recursive call to the left subtree
          this.preOrderPrint(currentNode.leftChild);
           //make recursive call to the right subtree
          this.preOrderPrint(currentNode.rightChild);
      }
    //if the currentNode IS EQUAL to null, then 
    //we simply return
  }

}


var BST = new BinarySearchTree(6);
console.log("The root val for BST : ", BST.root.val)
BST.insertBST(4);
BST.insertBST(9);
BST.insertBST(5);
BST.insertBST(2);
BST.insertBST(8);
BST.insertBST(12);
BST.insertBST(10);
BST.insertBST(14);

BST.preOrderPrint(BST.root);