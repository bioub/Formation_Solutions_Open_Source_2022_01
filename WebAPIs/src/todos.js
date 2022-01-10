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

  const spanEl = document.createElement('span');
  spanEl.innerText = todo.title;
  divEl.appendChild(spanEl);

  return divEl;
}
