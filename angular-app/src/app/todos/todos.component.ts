import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos = [
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

  constructor() {}

  ngOnInit(): void {}
}
