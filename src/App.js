import React, {useState, useEffect, useReducer} from 'react'
import TodoList from './TodoList';
import {Context} from "./context";
import {reducer} from './reducer';

const App = () => {
    const [state, dispatch] = useReducer(reducer, JSON.parse(localStorage.getItem('todos')));
    const [todoTitle, setTitle] = useState('');

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(state))
    }, [state]);

    const addTitle = (e) => {
        if (e.key === 'Enter') {
            dispatch({
                type: 'add',
                payload: todoTitle
            });
            setTitle('');
        }
    };

    return (
        <Context.Provider value={{
            dispatch
        }}>
            <div className="container">
                <h1>Todo app</h1>

                <div className="input-field"

                >
                    <input type="text"
                           value={todoTitle}
                           onChange={(e) => setTitle(e.target.value)}
                           onKeyPress={addTitle}
                    />
                    <label>Todo name</label>
                </div>

                <TodoList todos={state}/>
            </div>
        </Context.Provider>
    );
};

export default App;