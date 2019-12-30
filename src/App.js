import React, {useState, useEffect} from 'react'
import TodoList from './TodoList';
import {Context} from "./context";

const App = () => {
    const [todos, setTodos] = useState([]);
    const [inputText, setInputText] = useState('');

    useEffect(() => {
        const raw = localStorage.getItem('todos');
        setTodos(JSON.parse(raw))
    }, []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos]);

    const addTitle = (e) => {
        if (e.key === 'Enter') {
            setTodos([
                ...todos,
                {
                    id: Date.now(),
                    title: inputText,
                    completed: false
                }
            ]);
            setInputText('');
        }
    };

    const removeItem = id => {
        setTodos(todos.filter(todo => {
        return todo.id !== id
        }))
    };

    const toggleItem = id => {
        setTodos(todos.map(todo =>{
            if(todo.id === id){
                todo.completed = !todo.completed
            }
            return todo
        }))
    };

    return (
        <Context.Provider value={{
            removeItem,
            toggleItem
        }}>
            <div className="container">
                <h1>Todo app</h1>

                <div className="input-field"

                >
                    <input type="text"
                           value={inputText}
                           onChange={(e) => setInputText(e.target.value)}
                           onKeyPress={addTitle}
                    />
                    <label>Todo name</label>
                </div>

                <TodoList todos={todos}/>
            </div>
        </Context.Provider>
    );
};

export default App;