

  

export type TaskType = {
    taskId:number,
    title:string,
    description:string,
    createdAt:string,
    dueDate:string, 
    completed:boolean,
    userId:number
    author: UserType
}

export type UserType = {
    userId:number, 
    username:string,
    email:string,
    // password:string,
    dateCreated:string
}

export type TaskFormDataType = {
    title:string,
    description:string,
    dueDate:string
}