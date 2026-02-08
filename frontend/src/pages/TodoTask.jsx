import React from 'react'

const TodoTask = ({ todoTask }) => {
    console.log(todoTask)
  return (
    <ul className="max-w-3xl mx-auto mt-4 space-y-3">
      {todoTask && todoTask.map((task, idx) => (
        <li
          key={idx}
          className="flex items-center justify-between gap-3 p-3 bg-white/90 dark:bg-gray-800/80 border border-gray-100 dark:border-gray-700 rounded-md shadow-sm"
        >
          <div className="flex-1 min-w-0">
            <div className="flex items-baseline gap-3">
              <h3 className="truncate text-sm font-medium text-gray-900 dark:text-gray-100">{task.todoName}</h3>
              <time className="text-xs text-gray-500">{task.todoCompleteDate}</time>
            </div>
          </div>

          <button
            type="button"
            className="text-sm text-red-600 hover:text-red-800 px-2 py-1 rounded-md border border-red-100 hover:bg-red-50"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  )
}

export default TodoTask