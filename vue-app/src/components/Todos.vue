<template>
  <form class="todo-form" @submit="addTodo($event)">
    <input type="checkbox" class="todo-toggle-all" />
    <input class="todo-input" v-model="value" />
    <button>+</button>
  </form>
  <div class="todo-container">
    <div class="todo-row" v-for="todo of todos" :key="todo.id">
      <input type="checkbox" v-model="todo.completed" />
      <span
        @dblclick="idTodoEdition = todo.id"
        v-if="idTodoEdition !== todo.id"
      >
        {{ todo.title }}
      </span>
      <input class="todo-edit" v-model="todo.title" v-else />
      <button @click="deleteTodo(todo)">-</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
  },
  mounted() {
    document.addEventListener('click', this.handleDocumentClick);
  },
  beforeUnmount() {
    document.removeEventListener('click', this.handleDocumentClick);
  },
  methods: {
    addTodo(event) {
      event.preventDefault();
      this.todos.unshift({
        id: Math.random(),
        title: this.value,
        completed: false,
      });
    },
    deleteTodo(todo) {
      const index = this.todos.indexOf(todo);
      this.todos.splice(index, 1);
    },
    handleDocumentClick(event) {
      if (event.target.classList.contains('todo-edit')) {
        return;
      }
      this.idTodoEdition = undefined;
    },
  },
};
</script>
