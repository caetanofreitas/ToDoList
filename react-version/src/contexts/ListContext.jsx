import React, { createContext, useContext, useState, useEffect } from 'react';

import getActualDate from '../functions/getActualDate';

const ListContext = createContext();

export default function ListProvider({ children }) {
    const [list, setList] = useState(JSON.parse(localStorage.getItem('list')) || []);
    const [selection, setSelection] = useState('all');
    const [renderList, setRenderList] = useState([]);

    useEffect(() => localStorage.setItem('list', JSON.stringify(list)), [list])

    useEffect(() => {
        let newList = []
        switch (selection) {
            case 'all':
                setRenderList(list);
                break;
            case 'incomplete':
                newList = list.filter(e => e.completed === false);
                setRenderList(newList)
                break;
            case 'complete':
                newList = list.filter(e => e.completed === true);
                setRenderList(newList)
                break;
            default:
                setRenderList(list);
        }
    }, [list, selection])

    function addItem(item) {
        if (item === '' || null || undefined) {
            document.querySelector('input').classList.add('error');
            document.querySelector('input').focus();
        } else {
            document.querySelector('input').classList.remove('error');
            setList([...list, {
                id: list.length + 1,
                item,
                completed: false,
                completedAt: '',
                editedAt: '',
                date: `${getActualDate()}`
            }])
        }

    }

    function handleSetSelecion(type) {
        setSelection(type)
    }

    function completeTodo(todo) {
        const editedTodo = {
            id: todo.id,
            item: todo.item,
            completed: !todo.completed,
            completedAt: !todo.completed === true ? `${getActualDate()}` : '',
            editedAt: todo.editedAt,
            date: todo.date
        }
        const newList = []

        list.forEach(e => {
            if (e === todo) {
                newList.push(editedTodo)
            } else {
                newList.push(e)
            }
        });
        setList(newList);
    }

    function deleteTodo(todo) {
        const newList = list.filter(e => e !== todo);
        setList(newList);
    }

    function editTodo(item) {
        const text = document.getElementById(`txt${item.id}`);
        text.contentEditable = text.isContentEditable ? false : true;

        if (text.isContentEditable) {
            text.focus();
        } else {
            const newItem = {
                id: item.id,
                item: text.textContent,
                completed: item.completed,
                completedAt: item.completedAt,
                editedAt: `${getActualDate()}`,
                date: item.date
            };

            const newList = []

            list.forEach(e => {
                if (e === item) {
                    newList.push(newItem)
                } else {
                    newList.push(e)
                }
            });
            setList(newList);
        }
    }

    return (
        <ListContext.Provider value={{ renderList, addItem, completeTodo, deleteTodo, editTodo, handleSetSelecion, selection }}>
            {children}
        </ListContext.Provider>
    );
};

export function useList() {
    const context = useContext(ListContext);
    const { renderList, addItem, completeTodo, deleteTodo, editTodo, handleSetSelecion, selection } = context;
    const counter = renderList.length;
    return { renderList, addItem, counter, completeTodo, deleteTodo, editTodo, handleSetSelecion, selection };
} 