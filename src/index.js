import React from 'react'
import { createRoot } from 'react-dom/client' // 1. Updated import
import './index.css'
import App from './App'

import './api/server'

import store from './store'
import { Provider } from 'react-redux'
import { fetchTodos } from './features/todos/todosSlice'

store.dispatch(fetchTodos())

// 2. Select the DOM element
const container = document.getElementById('root')

// 3. Create the React 18 root and render
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
