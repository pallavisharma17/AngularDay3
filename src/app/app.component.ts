import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  todoList: string[];

  constructor() {
    this.todoList = [];
  }

  update(arr) {
    this.todoList = arr;
  }
}
