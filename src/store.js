import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducer'
import { asyncFunctionMiddleware } from './exampleAddons/middleware'
import { client } from './api/client'

const composedEnhancer = composeWithDevTools(
  // Add whatever middleware you actually want to use here
  applyMiddleware(asyncFunctionMiddleware)
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
