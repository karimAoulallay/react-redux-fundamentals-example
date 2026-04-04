export const todoAdded = (todo) => {
  return {
    type: 'todos/todoAdded',
    payload: todo,
  }
}

export const todosLoaded = (todos) => ({
  type: 'todos/todosLoaded',
  payload: todos,
})

export const allTodosCompleted = () => ({ type: 'todos/allCompleted' })

export const clearCompletedTodos = () => ({ type: 'todos/completedCleared' })

export const todoToggled = (todoId) => ({
  type: 'todos/todoToggled',
  payload: todoId,
})

export const colorSelected = ({ todoId, color }) => ({
  type: 'todos/colorSelected',
  payload: { todoId: todoId, color },
})

export const todoDeleted = (todoId) => ({
  type: 'todos/todoDeleted',
  payload: todoId,
})
