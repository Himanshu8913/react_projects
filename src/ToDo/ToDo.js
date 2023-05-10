import React, { useState } from 'react'

function ToDo() {

    const [task, setTask] = useState("");
    const [todos, setTodos] = useState(['Complete Todo app', 'Complete 1 section']);

    const createTodoHandler = () => {
        setTodos(pervTodos => {
            return [...pervTodos, task]
        })
    }
    return (
        <div >
            <h1> To Do Application </h1>
            <input type="text" value={task}
            onChange={event => {
                setTask(event.target.value)
            }} />
            <button onClick={createTodoHandler}>Create Todo</button>

            <ul>
                {todos.map(todo => {
                    return <li>{todo}</li>
                })}
            </ul>
        </div>
    )
}

export default ToDo;
