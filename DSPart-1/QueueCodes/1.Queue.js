class Queue{
    constructor(){
        this.items = [];
    }

    Enqueue(element){

        if(this.IsFull()){
            console.log("Insertion cant be performed bcoz Queue is Full");
        }else{
            this.items.push(element);
        }
       

    }

    Dequeue(element){

        if(this.IsEmpty()){
            console.log("Dequeue operation can't be perform As your queue is empty")
        }
        else{
            this.items.shift(element);
        }
       
    }
    IsFull(){
        if(this.items.length==10){
            return true;
        }
        else{
            return false;
        }
    }

    IsEmpty(){
        if(this.items.length == 0){
            return true;
        }
        else{
            return false;
        }
    }

    Peek(){
        if(this.IsEmpty()){
            console.log("Peek can't be Identify bcoz Queue is Empty");
        }
        else{
            console.log("Peek is ==============> "+this.items[0]);
        }
    }

    SizeofQueue(){
        console.log(this.items.length);
    }

    PrintQueue(){
        console.log(this.items);
    }

    ClearQueue(){
        this.items=[];
    }

}


const Queueobj = new Queue();


Queueobj.Enqueue(56);
Queueobj.Enqueue(46);
Queueobj.Enqueue(26);
Queueobj.Enqueue(61);

Queueobj.Enqueue(56);
Queueobj.Enqueue(46);
Queueobj.Enqueue(26);
Queueobj.Enqueue(61);

Queueobj.Enqueue(56);
Queueobj.Enqueue(46);




Queueobj.Dequeue();
Queueobj.Dequeue();
Queueobj.Dequeue();
Queueobj.Dequeue();
Queueobj.Dequeue();
Queueobj.Dequeue();
Queueobj.Dequeue();
Queueobj.Enqueue(56);

Queueobj.PrintQueue();
Queueobj.Peek();
Queueobj.SizeofQueue();