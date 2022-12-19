import React, { useState } from 'react'
import Form from "./Form";
import TodoList from './TodoList';


export default function App() {
  const [todos, setTodos] = useState(
    [
      {
        isim: 'Yemekleri Pişir',
        id: 1528817077286,
        tamamlandi: false
      },
      {
        isim: 'Bake Cookies',
        id: 1528817084358,
        tamamlandi: true
      }
    ]
  )
  return (
    <div>

      <h1>Todos</h1>
      <TodoList list={todos} updateMainState={setTodos}/>
      <Form doSubmit={setTodos} current={todos}/>
      
    </div>
  )
}
