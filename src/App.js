import { React, useState } from 'react'
import './App.css';
import uniqid from 'uniqid';
import TodoForm from './components/TodoForm.jsx'
import { TodoList } from './components/ToDoList';

function App() {

  const [todos, setTodos] = useState([]);

  function addTodo(title) {
    setTodos(currentTodos => {
      return [
        { id: uniqid(), title, completed: false },
        ...currentTodos
      ]
    })
  }
  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }

        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <div className='main-container'>
      <main>
        <TodoForm onSubmit={addTodo} />
        <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      </main>
    </div>
  );
}

export default App;
