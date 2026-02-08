import React from 'react'

const TodoHeading = () => {
  return (
    <header className="w-full py-6">
      <div className="max-  w-3xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-indigo-600 dark:text-indigo-300">Todo List</h1>
          <span className="text-sm font-medium text-indigo-600 dark:text-indigo-200">0 items</span>
        </div>
        <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">Add and manage your tasks below.</p>
      </div>
    </header>
  )
}

export default TodoHeading