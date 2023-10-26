import { React, useState } from 'react'

export default function TodoForm({ onSubmit }) {

  const [newTodo, setNewTodo] = useState("");

  function handleSubmit(e) {
    e.preventDefault()
    if (newTodo === "") return
    onSubmit(newTodo)
    setNewTodo("")
  }

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        className="input-add"
        value={newTodo}
        onChange={e => setNewTodo(e.target.value)}
        type="text"
        id="todo-input"
        autoFocus
        placeholder="What needs to be done?"
        autoComplete="off"
      />
      <button className="btn-add">Add</button>
    </form>
  )
}
