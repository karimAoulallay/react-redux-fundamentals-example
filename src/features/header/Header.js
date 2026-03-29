import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { saveNewTodo } from '../todos/todosSlice'

const Header = () => {
  const dispatch = useDispatch()
  const [text, setText] = useState('')

  const handleChange = (e) => setText(e.target.value)

  const onSubmit = (e) => {
    e.preventDefault()

    // If the user pressed the Enter key:
    const trimmedText = text.trim()
    if (trimmedText) {
      // Create the thunk function with the text the user wrote
      const saveNewTodoThunk = saveNewTodo(trimmedText)
      // Then dispatch the thunk function itself
      dispatch(saveNewTodoThunk)
      setText('')
    }
  }

  return (
    <header className="header">
      <form onSubmit={onSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          value={text}
          onChange={handleChange}
        />
        <button></button>
      </form>
    </header>
  )
}

export default Header
