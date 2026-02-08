import React from 'react'

const TodoCreateTask = ({todoTask,setTodoTask}) => {
    const handleOnSubmit = (e) => {
      e.preventDefault();
      console.log(
        e.target.todoName.value,
        e.target.todoCompleteDate.value,
        e.target.todoComplete.value
      )
      const todoName= e.target.todoName.value;
      const todoCompleteDate= e.target.todoCompleteDate.value;
      const todoComplete=e.target.todoComplete.value;
      setTodoTask({todoName,todoCompleteDate,todoComplete})
    }
  return (
    <form
      onSubmit={handleOnSubmit}
      className="max-w-3xl mx-auto p-4 bg-white/80  rounded-lg shadow flex gap-3 items-center"
    >
      <label className="sr-only" htmlFor="task">Create task</label>
      <input
        id="task"
        type="text"
        name='todoName'
        placeholder="Create task"
        className="flex-1 px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      <label className="sr-only" htmlFor="due">Due date</label>
      <input
        id="due"
        type="date"
        name='todoCompleteDate'
        className="w-44 px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      <label className="sr-only" htmlFor="todoComplete">Complete?</label>
      <select
        id="todoComplete"
        name="todoComplete"
        className="w-36 px-3 py-2 border border-gray-200 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
        defaultValue="false"
      >
        <option value="false">False</option>
        <option value="true">True</option>
      </select>

      <button
        type="submit"
        className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 active:scale-95 transition"
      >
        Add
      </button>
    </form>
  )
}

export default TodoCreateTask