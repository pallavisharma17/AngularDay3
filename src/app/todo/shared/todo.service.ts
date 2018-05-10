import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {


  getToDoList(toDoList) {
    return toDoList;
  }

  addToDo(toDo: string, toDoList) {
    toDoList.push({
      toDo: toDo,
      isChecked: false
    });
  }

  checkOrUncheckToDo(toDo, toDoList) {

    let updateIndex = toDoList.indexOf(toDo);

    if (toDoList[updateIndex].isChecked == false) {
      toDoList[updateIndex].isChecked = true
    }
    else
      toDoList[updateIndex].isChecked = false
  }

  removeToDo(toDo, toDoList) {
    toDoList.splice(toDoList.indexOf(toDo), 1);
  }

  editToDo(toDo, updateTask: string, toDoList) {
    let updateIndex = toDoList.indexOf(toDo);
    toDoList[updateIndex].toDo = updateTask;
  }
}
