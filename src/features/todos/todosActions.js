export const todoAdded = (todo) => {
  return {
    type: 'todos/todoAdded',
    payload: todo,
  }
}

export const todosLoaded = (todos) => {
  return { type: 'todos/todosLoaded', payload: todos }
}
