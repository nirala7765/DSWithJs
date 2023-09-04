class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Linkelist {
    constructor() {
        this.head = null;
        this.tail = null;
    }


    append(value) {
        const NewNodes = new Node(value);

        if (this.head == null && this.tail == null) {
            this.head = NewNodes;
            this.tail = NewNodes;
        } else {
            this.tail.next = NewNodes;
            this.tail = NewNodes;
        }
    }

    PreAppend(value) {
        const NewNodes = new Node(value);
        if (this.head == null && this.tail == null) {
            this.head = NewNodes;
            this.tail = NewNodes;
        } else {
            NewNodes.next = this.head;
            this.head = NewNodes;
        }
    }

    IsEmpty() {
        if (this.head == null && this.tail == null) {
            console.log("Your Linked list is Empty")
        } else {
            console.log("Your Linkedlist has Some Element Meanwhile Your Linkedlist is not Empty")
        }
    }

    CalcilateLength() {
        let count = 0;
        let current = this.head;
        while (current) {
            count++;
            current = current.next;
        }

        console.log(`Your LinkedList having ${count} Nodes.`);

        return count;
    }

    PrintLinkedList() {
        let current = this.head;
        const values = [];

        while (current != null) {
            values.push(current.value);
            current = current.next;
        }

        console.log(values.join("  ===> "))
    }

    clearLinkedList() {
        this.head = null;
        this.tail = null;

    }

    Deleteelement(index) {

        if (index >= 0 && index < this.CalcilateLength()) {

            if (this.head == null && this.tail == null) {
                console.log("You Can't Perform Delete Operation Because Your LinkedList is Empty");

            }
            else{
                if(index == 0){
                    this.head=this.head.next;
                }else{
                    let current = this.head;
                    let previous = null;

                    let CurrentIndex = 0;

                    while(CurrentIndex <index) {
                        previous = current;
                        current = current.next;
                        CurrentIndex++;
                    }
                    previous.next=current.next;

                    if(!previous.next){
                        this.tail=previous;

                    }

                }
            }

        }else{
            console.log("Invalid Index........")
        }

    }
}


const llobj = new Linkelist();

llobj.append(10);
llobj.append(50);
llobj.append(90);
llobj.append(100);

llobj.PreAppend(78);

llobj.PreAppend(178);


llobj.IsEmpty();
llobj.PrintLinkedList();
llobj.CalcilateLength();



llobj.Deleteelement(2);
llobj.Deleteelement(1);



llobj.IsEmpty();
llobj.PrintLinkedList();
llobj.CalcilateLength();





