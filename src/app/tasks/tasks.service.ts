import { Injectable } from '@angular/core';
import { NewTask } from './new-task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private dummyTasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ]
  constructor() {
    const tasks = localStorage.getItem('tasks');
    if(tasks){
      this.dummyTasks = JSON.parse(tasks);
    }
   }

  showUserTasks(uId: string){
    return this.dummyTasks.filter(task => task.userId === uId);
  }

  addTask(taskData: NewTask, uId:string){
    this.dummyTasks.push({
      id: `t${this.dummyTasks.length}`,
      userId: uId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.dueDate,
    });
    this.saveTasks();
  }
  deleteTask(tId:string) {
    this.dummyTasks = this.dummyTasks.filter(task => task.id !== tId);
    this.saveTasks()
  }

  private saveTasks(){
    localStorage.setItem('tasks', JSON.stringify(this.dummyTasks));
  }
}
