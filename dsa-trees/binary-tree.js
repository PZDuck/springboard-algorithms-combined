/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth(r=this.root, count=1) {
    if (!r) return 0

    if (!r.left && !r.right) {
      return count
    }

    count += 1
    return Math.min(this.minDepth(r.left, count), this.minDepth(r.right, count))
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth(r=this.root, count=1) {
    if (!r) return 0

    if (!r.left && !r.right) {
      return count
    }
    
    count += 1
    return Math.max(this.maxDepth(r.left, count), this.maxDepth(r.right, count))
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum(r=this.root, sum=0) {
    if (!r) return 0

    if (sum === 0) sum = r.val

    if (!r.left && !r.right) {
      return sum
    }

    sum += r.val

    return Math.max(this.maxSum(r.left, sum), this.maxSum(r.right, sum))
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if (!this.root) return null

    let q = [this.root]
    let larger = null

    while (q.length) {
      let current = q.shift()
      
      console.log(current, larger)
      if ((current.val > lowerBound) && (larger === null || current.val < larger)) {
        larger = current.val
      }

      if (current.left) q.push(current.left)
      if (current.right) q.push(current.right)
    }

    return larger
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {
    if (!this.root) return false

    function findLevel(target, current, level=1) {
      if (current === target || (!current.left && !current.right)) {
        return level
      }
      
      level += 1
      return findLevel(target, current.left, level) || findLevel(target, current.right, level)
    }

    return findLevel(node1, this.root) === findLevel(node2, this.root)
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
