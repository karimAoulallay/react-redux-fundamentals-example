import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducer'
import { client } from './api/client'
import { thunk } from 'redux-thunk'

const composedEnhancer = composeWithDevTools(
  // Add whatever middleware you actually want to use here
  applyMiddleware(thunk)
  // other store enhancers if any
)

const store = createStore(rootReducer, composedEnhancer)

const fetchTodos = async (dispatch, getState) => {
  client.get('fakeApi/todos').then((todos) => {
    dispatch({ type: 'todos/todosLoaded', payload: { todos } })
  })
}

store.dispatch(fetchTodos)

export default store
