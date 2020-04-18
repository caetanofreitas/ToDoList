import React, { useState } from 'react';

import { InputGroup } from '../../assets/styles/InputContainer';

import { useList } from '../../contexts/ListContext';
import { useLang } from '../../contexts/LanguageContext';

export default function InputContainer() {
    const [todo, setTodo] = useState('');
    const { addItem } = useList();
    const { lang } = useLang();

    function handleSubmit(e) {
        e.preventDefault();
        addItem(todo);
        setTodo('');
    }

    return (
        <InputGroup onSubmit={handleSubmit}>
            <input
                type="text"
                value={todo}
                placeholder={lang.placeholder}
                onChange={e => {
                    setTodo(e.target.value);
                    if (e.target.classList.contains('error')) {
                        e.target.classList.remove('error')
                    }
                }}
            />

            <button>
                {lang.btnText}
            </button>
        </InputGroup>
    );
}