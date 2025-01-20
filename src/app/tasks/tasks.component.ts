import { Component , Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { TaskFormComponent } from "./task-form/task-form.component";

import { type NewTask } from './new-task.model';

import { TasksService } from './tasks.service';
@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, TaskFormComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) name!:string; 
  @Input({required: true}) uId!:string;
  constructor(private taskService:TasksService){}
  isAddingTask=false;
  id!:string;

  get selectedUserTasks(){
    return this.taskService.showUserTasks(this.uId);
  }
  showTaskComponent():void{
    console.log('show task form');
    this.isAddingTask = true;
  }
  cancelTask(canceled:boolean):void{ 
    this.isAddingTask = canceled;
  }

}
