import React, {useState} from 'react'

const TodoItem = ({title, id, completed}) => {

    const [checked, setCheck] = useState(completed);

    const cls = ['todo'];

    if (checked) {
        cls.push('completed')
    }


    return (
        <li className={cls.join(' ')}>
            <label>
                <input
                    type="checkbox"
                    checked={checked}
                    value={completed}
                    onChange={() => setCheck(!checked)}
                />
                <span>{title}</span>

                <i
                    className="material-icons red-text"
                >
                    delete
                </i>
            </label>
        </li>
    )
};

export default TodoItem;