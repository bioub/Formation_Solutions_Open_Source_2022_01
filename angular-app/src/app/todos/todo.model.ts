export interface Todo {
  id?: number;
  title?: string;
  completed?: boolean;
}


this.setState({
  todos: [
    ...this.state.todos,
    {
      id: Math.random(),
      title: this.state.value,
      completed: false,
    },
  ],
});
