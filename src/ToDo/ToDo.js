import React, { useState } from 'react';

function ToDo() {

    const [task, setTask] = useState('')

    const [todos, setTodos] = useState([])

    function addItemHandler(e) {
        if (e) {
            e.preventDefault();
            if (task === "") {
                alert('Enter a task first')
            } else {
                setTodos([...todos, task]);
                setTask('')
            }
        } else {
            setTodos([...todos])
        }
    }

    function deleteItemHandler(index) {
        todos.splice(index, 1)
        addItemHandler();
    }


    return (
        <div className="App">
            <form onSubmit={addItemHandler}>
                <input
                    type="text"
                    placeholder='write a todo...'
                    value={task}
                    onChange={(e) => { setTask(e.target.value) }} />

                <button type='submit'> Add Item </button>
            </form>
            <ul>
                {todos.map((todo, index) => {
                    return (
                        <div>
                            <li >{todo}</li>
                            <button onClick={() => deleteItemHandler(index)}>Delete</button>
                        </div>
                    )
                })}
            </ul>
        </div>
    )

}
export default ToDo;