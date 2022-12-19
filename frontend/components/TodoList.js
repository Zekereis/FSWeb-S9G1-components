import React from 'react'
import Todo from './Todo'

export default function TodoList({list, updateMainState}) {
  
    return (
      <div>
        <ul>
        {list.map(todo =>
          <Todo item={todo} key={todo.id} updateIt ={updateMainState} mevcutlar={list}/>
        )}
      </ul>
      </div>
    )
}
