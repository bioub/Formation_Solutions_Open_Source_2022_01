import React, { Component } from 'react';

export class Todos extends Component {
  state = {
    todos: [
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
    ],
    value: '',
    idTodoEdition: undefined,
  };
  handleNewTodoChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };
  handleSubmit = (event) => {
    const { todos, value } = this.state;
    event.preventDefault();
    this.setState({
      todos: [
        {
          id: Math.random(),
          title: value,
          completed: false,
        },
        ...todos,
      ],
    });
  };
  handleDelete = (todo) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter((t) => t.id !== todo.id),
    });
  };
  handleToggleAll = (event) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.map((t) => ({
        ...t,
        completed: event.target.checked,
      })),
    });
  };
  render() {
    const { todos, value, idTodoEdition } = this.state;
    return (
      <div className="Todos">
        <form class="todo-form" onSubmit={this.handleSubmit}>
          <input
            type="checkbox"
            class="todo-toggle-all"
            onChange={this.handleToggleAll}
          />
          <input
            class="todo-input"
            value={value}
            onChange={this.handleNewTodoChange}
          />
          <button>+</button>
        </form>
        <div class="todo-container">
          {todos.map((t) => (
            <div class="todo-row">
              <input type="checkbox" checked={t.completed} />
              {idTodoEdition !== t.id ? (
                <span>{t.title}</span>
              ) : (
                <input class="todo-edit" />
              )}
              <button onClick={() => this.handleDelete(t)}>-</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Todos;
