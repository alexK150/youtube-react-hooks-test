import React, {useState} from 'react'
import TodoList from './TodoList'

const App = () => {

    const [todos, setTodos] = useState([
        {id: 1, title: 'First todo', completed: false},
        {id: 2, title: 'Second todo', completed: true},
    ]);

    const [inputText, setInputText] = useState('');

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

    return (
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
    );
};

export default App;