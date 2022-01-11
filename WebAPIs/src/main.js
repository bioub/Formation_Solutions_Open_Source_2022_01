import { createTodoRow } from "./todos";

/** @type {HTMLFormElement} */
const formEl = document.querySelector('.todo-form');

/** @type {HTMLInputElement} */
const inputEl = document.querySelector('.todo-input');

/** @type {HTMLDivElement} */
const containerEl = document.querySelector('.todo-container');

/** @type {HTMLInputElement} */
const toggleEl = document.querySelector('.todo-toggle-all');

formEl.addEventListener('submit', (event) => {
  event.preventDefault();

  const todoRowEl = createTodoRow({
    id: Math.random(),
    title: inputEl.value,
    completed: false,
  });

  containerEl.prepend(todoRowEl); // .prepend pas IE
});

containerEl.addEventListener('click', (event) => {
  /** @type {HTMLElement} */
  const target = event.target;

  if (target.classList.contains('todo-remove')) {
    target.closest('.todo-row').remove();
  }
});

toggleEl.addEventListener('change', () => {
  /** @type {NodeListOf<HTMLInputElement>} */
  const checkboxEls = containerEl.querySelectorAll('.todo-completed');

  for (const checkboxEl of checkboxEls) {
    checkboxEl.checked = toggleEl.checked;
  }
});
