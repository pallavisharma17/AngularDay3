import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoService } from './shared/todo.service'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoService]
})
export class TodoComponent {

  @Input() toDoList;
  @Output() result = new EventEmitter();

  toDoListArray: any[]

  constructor(private toDoService: TodoService) { }

  ngOnInit() {
    this.toDoListArray = this.toDoService.getToDoList(this.toDoList);
    this.result.emit(this.toDoList);
  }

  onAdd(itemTitle) {
    this.toDoService.addToDo(itemTitle.value, this.toDoList);
    itemTitle.value = null;
    this.result.emit(this.toDoList);
  }

  alterCheck(toDo) {
    this.toDoService.checkOrUncheckToDo(toDo, this.toDoList);
    this.toDoListArray.sort((a, b) => {
      return a.isChecked - b.isChecked;
    })
    this.result.emit(this.toDoList);
  }

  onDelete(toDo) {
    this.toDoService.removeToDo(toDo, this.toDoList);
    this.result.emit(this.toDoList);
  }

  onUpdate(toDo, updateTask) {
    this.toDoService.editToDo(toDo, updateTask, this.toDoList);
    updateTask = null;
    this.result.emit(this.toDoList);
  }
  // @Input() todo;
  // @Output() result=new EventEmitter();

  // add(item: string) {
  //   this.todo.push(item);
  //   this.result.emit(this.todo);
  //   console.log(this.todo)
  // }


}
