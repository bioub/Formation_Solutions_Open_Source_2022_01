/**
 * @param {object} todo
 * @param {number} todo.id
 * @param {string} todo.title
 * @param {boolean} todo.completed
 */
export function createTodoRow(todo) {
  /*
  <div class="todo-row">
    <input type="checkbox" />
    <span>Acheter du pain</span>
    <button>-</button>
  </div>
  */
  const divEl = document.createElement('div');
  divEl.className = 'todo-row';

  const checkboxEl = document.createElement('input');
  checkboxEl.className = 'todo-completed';
  checkboxEl.type = 'checkbox';
  checkboxEl.checked = todo.completed;
  divEl.appendChild(checkboxEl);

  const spanEl = document.createElement('span');
  spanEl.innerText = todo.title;
  divEl.appendChild(spanEl);

  const buttonEl = document.createElement('button');
  buttonEl.className = 'todo-remove';
  buttonEl.innerText = '-';
  divEl.appendChild(buttonEl);

  return divEl;
}
