  

class Task {
    task_id:number;
    title:string; 
    description:string; 
    completed:boolean;

    constructor(task:string, desc:string) {
    this.title = task,
    this.description = desc
    this.task_id = currentId
    this.completed = false
    currentId++
    }
}

let currentId:number = 0

export { Task }