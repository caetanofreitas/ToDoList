import React from 'react';
import { MdArrowUpward } from 'react-icons/md';

import { useLang } from '../../contexts/LanguageContext';

import { AddItenDiv } from '../../assets/styles/AddNewItens';

export default function AddNewItens() {
    const { lang } = useLang();
    return (
        <AddItenDiv >
            <MdArrowUpward size={30} className="arrow" />
            <p>{lang.noTasks}</p>
            <p>{lang.createTask}</p>
        </AddItenDiv>
    );
}