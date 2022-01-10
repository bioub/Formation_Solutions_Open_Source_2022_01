import { createTodoRow } from "./todos.js";

/** @type {HTMLFormElement} */
const formEl = document.querySelector('.todo-form');

/** @type {HTMLInputElement} */
const inputEl = document.querySelector('.todo-input');

/** @type {HTMLDivElement} */
const containerEl = document.querySelector('.todo-container');

formEl.addEventListener('submit', (event) => {
  event.preventDefault();

  const todoRowEl = createTodoRow({
    id: Math.random(),
    title: inputEl.value,
    completed: false,
  });

  containerEl.prepend(todoRowEl); // .prepend pas IE
});
