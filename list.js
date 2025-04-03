class ListItem {
    constructor (value) {
        this.value = value
        this.next = null
    }
}

class List {
    constructor () {
        this.head = null
        this.size = 0
    }

    pushItem (value) {
        const newItem = new ListItem(String(value))

        if (this.head === null) {
            this.head = newItem
        } else {
            let current = this.head
            while (current.next !== null) {
                current = current.next
            }
            current.next = newItem
            this.size++
        }
    }
    printList () {
        if (this.head === null) {
            console.log('List is empty...')
        } else {
            this.printRecursion(this.head)
        }
    }
    printRecursion (listItem) {
        if (listItem.next) {
            process.stdout.write(listItem.value + ' -> ')
            return this.printRecursion(listItem.next)
        } else {
            process.stdout.write(listItem.value)
            return
        }
    }
}

// const myList = new List()

// myList.pushItem(22)
// myList.pushItem(24)
// myList.printList()