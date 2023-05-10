import React, { useState } from 'react'

function ToDo() {

    const [task, setTask] = useState("");
    const [todos, setTodos] = useState(['Complete Todo app', 'Complete 1 section']);

    const createTodoHandler = (event) => {
        event.preventDefault();
        
        setTodos(pervTodos => {
            setTask('');
            return [...pervTodos, task]
        })
    };

    return (
        <div >
            <h1> To Do Application </h1>
            <form onSubmit={createTodoHandler}>
                <input
                    type="text"
                    value={task}
                    onChange={event => {
                        setTask(event.target.value)
                    }}
                />
                <button type="submit">Create Todo</button>
            </form>

            <ul>
                {todos.map((todo, index) => {
                    return <li key={index}>{todo}</li>
                })}
            </ul>
        </div>
    )
}

export default ToDo;
