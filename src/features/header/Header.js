import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { saveNewTodo } from '../todos/todosSlice'

const Header = () => {
  const dispatch = useDispatch()
  const [status, setStatus] = useState('idle')
  const [text, setText] = useState('')

  const handleChange = (e) => setText(e.target.value)

  const onSubmit = async (e) => {
    e.preventDefault()

    // If the user pressed the Enter key:
    const trimmedText = text.trim()
    if (trimmedText) {
      setStatus('loading')
      // Create the thunk function with the text the user wrote
      const saveNewTodoThunk = saveNewTodo(trimmedText)
      // Then dispatch the thunk function itself
      dispatch(saveNewTodoThunk)
      setText('')
      setStatus('idle')
    }
  }

  let isLoading = status === 'loading'
  let placeholder = isLoading ? '' : 'What needs to be done?'
  let loader = isLoading ? <div className="loader" /> : null

  return (
    <header className="header">
      <form onSubmit={onSubmit}>
        <input
          className="new-todo"
          placeholder={placeholder}
          value={text}
          onChange={handleChange}
          disabled={isLoading}
        />
        <button></button>
      </form>
      {loader}
    </header>
  )
}

export default Header
