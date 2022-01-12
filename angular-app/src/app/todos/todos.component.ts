import { Component, HostListener, OnInit } from '@angular/core';
import { Todo } from './todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [
    {
      id: Math.random(),
      title: 'ABC',
      completed: true,
    },
    {
      id: Math.random(),
      title: 'DEF',
      completed: false,
    },
  ];

  value = '';

  idTodoEdition: number | undefined;

  constructor() {
  }

  ngOnInit(): void {}

  addTodo(event: Event) {
    event.preventDefault();
    this.todos.unshift({
      id: Math.random(),
      title: this.value,
      completed: false,
    });
  }

  deleteTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }

  @HostListener('document:click', ['$event'])
  clickOutside(event: Event) {
    if ((event.target as Element).classList.contains('todo-edit')) {
      return;
    }
    this.idTodoEdition = undefined;
  }
}
