class TreeNode {
    constructor (name, value) {
        this.name = name
        this.value = value
        this.left = null
        this.right = null
    }
}

class Tree {
    constructor () {
        this.head = null
    }
    findNode (name) {
        function recursiveFindNode (node) {
            if (node === null) {
                return null
            }
            if (node.name === name) {
                return node
            }
            const leftResult = recursiveFindNode(node.left)

            if (leftResult !== null) return leftResult
            else return recursiveFindNode(node.right)
        }

        if (this.head === null) {
            return null
        } else {
            const found = recursiveFindNode(this.head) 
            if (found === null) {
                console.log(`Cannot find node with name ${name}` )
            }
            return found
        }
    }

    insertLeft (rootName, name, value) {
        if (this.head === null) {
            this.head = new TreeNode(name, value)
            console.log(`Root ${name} with value ${value} successfully added!`)
        } else {
            const node = this.findNode(rootName)
            if (node === null) return
            if (node.left === null) {
                node.left = new TreeNode(name, value)
                console.log(`Root ${name} with value ${value} successfully added!`)
            } else {
                console.log(`Can't insert the left node because it already exists!`)
            }
        }
    }
    insertRight (rootName, name, value) {
        if (this.head === null) {
            this.head = new TreeNode(name, value)
            console.log(`Root ${name} with value ${value} successfully added!`)
        } else {
            const node = this.findNode(rootName)
            if (node === null) return
            if (node.right === null) {
                node.right = new TreeNode(name, value)
                console.log(`Root ${name} with value ${value} successfully added!`)
            } else {
                console.log(`Can't insert the right node because it already exists!`)
            }
        }
    }
}

// const myTree = new Tree()

// myTree.insertLeft("HEAD", "ROOT", 22)
// myTree.insertLeft('ROOT', "A", 14)
// myTree.insertRight('ROOT', "B", 15)
// myTree.insertLeft('A', "C", 32)
// myTree.insertRight('B', "D", 44)
// myTree.insertLeft("B", "E", 11)
// myTree.insertLeft("H", "E", 11)