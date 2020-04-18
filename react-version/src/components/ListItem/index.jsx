import React, { useState } from 'react';
import { MdCheckCircle, MdDelete, MdEdit, MdCheck } from 'react-icons/md';

import { Item, DateItem } from '../../assets/styles/ListContainer';
import { useList } from '../../contexts/ListContext';
import { useLang } from '../../contexts/LanguageContext';

export default function ListItem({ e }) {
    const { completeTodo, deleteTodo, editTodo } = useList();
    const { lang } = useLang();
    const [isEditable, setIsEditable] = useState(false);

    return (
        <Item>
            <div className={e.completed ? 'completed' : ''} >
                <MdCheckCircle size={20} onClick={() => completeTodo(e)} />
                <p id={`txt${e.id}`} className="itemText">{e.item}</p>
            </div>

            <div className={e.completed ? 'completed' : ''} >
                <DateItem>
                    {
                        e.editedAt !== '' ? '' : `${lang.createdAt} ${e.date}`
                    }
                    {
                        e.editedAt !== '' && e.completedAt === '' ? `${lang.editedAt} ${e.editedAt}` : ''
                    }
                    {
                        e.completedAt !== '' ? ` / ${lang.completedAt} ${e.completedAt}` : ''
                    }
                </DateItem>
                {
                    isEditable ?
                        <MdCheck onClick={() => {
                            editTodo(e);
                            setIsEditable(false)
                        }} size={20} /> :

                        <MdEdit onClick={() => {
                            setIsEditable(true);
                            editTodo(e);
                        }} size={20} />
                }
                <MdDelete size={20} onClick={() => deleteTodo(e)} />
            </div>
        </Item>
    );
}