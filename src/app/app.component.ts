import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dumy-users';
import { TasksComponent } from "./tasks/tasks.component";
import { NgFor, NgIf } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  template: 'Welcome to Angular',
})
export class AppComponent {
  title = 'first-angular-project';
  users = DUMMY_USERS;
  selectedUserId?:string;
  
  get selectedUser(){
    return this.users.find((user)=> user.id === this.selectedUserId);
  }
  
  onClickUser(id:string){
    this.selectedUserId = id;
  }
}
