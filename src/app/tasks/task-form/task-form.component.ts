import { Component, EventEmitter, Output, Input, inject } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { type NewTask } from '../new-task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task-form',
  imports: [FormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {
  @Output() close = new EventEmitter<boolean>() ;
  // @Output() addedTask = new EventEmitter<NewTask>();
  @Input({required: true}) userId!:string;
  canceld!:boolean;
  taskTitle = '';
  taskSummary = '';
  dueDate = '';
  private taskService = inject(TasksService);

  onCancelClick(){
    this.canceld= false;
    this.close.emit(this.canceld);
  }
  
  onSubmit(){
    this.taskService.addTask({
      title: this.taskTitle,
      summary: this.taskSummary,
      dueDate: this.dueDate,
    }, this.userId);
    this.close.emit(this.canceld);
  }
  
}
