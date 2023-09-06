class Node{
    constructor(data, next=null){
        this.data = data
        this.next = next
    }
}

class LinkedList{
    constructor(head=null, size=0){
        this.head = head
    }
    
    
    reverseLinkedList(){
        let countAllNode = 0
        let count = 1
        let currentNode = this.head
        while(currentNode.next){  
            countAllNode++
            currentNode = currentNode.next
        }
        
        for(let i = 0; i<countAllNode; i++){
            let lasatNode = this.head
            while(lasatNode.next){  
                lasatNode = lasatNode.next
            }
            // add last node in (count) index
            this.addAtIndex(lasatNode.data, count)
            count++
            this.removeLast() 
        }
        
    }
    
    // addFirst
    addFirst(data){
        this.head = new Node(data, this.head)
    }
    
    removeLast(){
        let currentNode = this.head
        
        while(currentNode.next.next){
            currentNode = currentNode.next
        }
        currentNode.next = null
        
    }
    
    
    // addLast
    addLast(data){
        const node = new Node(data)
        if(!this.head){
            this.head = node
        }else{
            let currentNode = this.head
            while(currentNode.next){
                currentNode = currentNode.next
            }    
            currentNode.next = node
            
        }
     
    }
    
    // addAtIndex
    
    addAtIndex(data, index){
        
        let count = 0
        let currentNode = this.head
        if(index === 1){
            this.addFirst(data)
        }else{
            while(currentNode){
               
                if(index-2 === count){
                    const node = new Node(data, currentNode.next)
                    currentNode.next = node
                   
                }
                 
                currentNode = currentNode.next
                count++
            }              
        }
         
          
    }
    
   
    printAllNode(){
        let currentNode = this.head
        while(currentNode){
            console.log(currentNode)
            currentNode = currentNode.next
        }
        console.log(' ++++++++ ')
    }
    // PrintAll
    printAll(){
        let currentNode = this.head
        while(currentNode){
            console.log(currentNode.data)
            currentNode = currentNode.next
        }
        console.log(' ------- ')
    }
    
    
}


const ll = new LinkedList()



ll.addLast(1)
ll.addLast(2)
ll.addLast(3)
ll.addLast(4)
ll.addLast(5)

ll.addFirst(0)
ll.addAtIndex(2222,6)

// ll.addAtIndex(4,1)
// ll.removeLast()
ll.printAll()
ll.reverseLinkedList()
ll.printAll()
