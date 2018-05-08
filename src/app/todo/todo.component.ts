import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  @Input() todo;
  @Output() result=new EventEmitter();

  add(item: string) {
    this.todo.push(item);
    this.result.emit(this.todo);
    console.log(this.todo)
  }


}
