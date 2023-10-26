export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
    return (
        <li className={"todo-item " + (completed ? "item-validated" : "")}>
            <p>{title}</p>
            <div className="action-container">
                <div className="checkbox-wrapper">
                    <label>
                        <input type="checkbox"
                            checked={completed}
                            onChange={e => toggleTodo(id, e.target.checked)} />
                        <span className="checkbox"></span>
                    </label>
                </div>
                <button onClick={() => deleteTodo(id)} className="delete-button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                </button>
            </div>
        </li>
    )
}
