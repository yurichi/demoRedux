/*
 * @Author: yuri
 * @Date:   2016-11-21 10:20:17
 * @Last Modified by:   yuri
 * @Last Modified time: 2016-12-21 15:34:23
 */


import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Counter from './componets/Counter'
import reducer from './reducers/index'

const store = createStore(reducer)
const rootEl = document.getElementById('root')

const render = () => ReactDOM.render(
  <Counter
    value={store.getState().num}
    onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
    onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
    onDB={() => store.dispatch({ type: 'DB' })}
    onReM={() => store.dispatch({ type: 'ReM' })}
  />,
  rootEl
)

render()
store.subscribe(render)


