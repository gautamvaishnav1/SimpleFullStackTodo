import React from 'react'
import { useState } from 'react'
import TodoHeading from './pages/TodoHeading'
import TodoCreateTask from './pages/TodoCreateTask'
import TodoTask from './pages/TodoTask'
const App = () => {
  const [todoTask, setTodoTask] = useState([])
  console.log(todoTask)
  return (
   <>
   <TodoHeading/>
   <TodoCreateTask todoTask={todoTask} setTodoTask={setTodoTask}/>
   <TodoTask todoTask={todoTask}/>
   </>
  )
}

export default App