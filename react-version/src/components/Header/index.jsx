import React, { useEffect, useState } from 'react';

import { HeaderStyle, DateBox, NavBar } from '../../assets/styles/Header';
import getData from '../../functions/getData';
import getHour from '../../functions/getHour';

import { useList } from '../../contexts/ListContext';
import { useLang } from '../../contexts/LanguageContext';

export default function Header() {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [selected, setSelected] = useState('all');
    const { counter, handleSetSelecion } = useList();
    const { lang } = useLang();

    useEffect(() => {
        switch (selected) {
            case 'all':
                document.getElementById('all').classList.add('selected');
                document.getElementById('incomplete').classList.remove('selected');
                document.getElementById('complete').classList.remove('selected');
                handleSetSelecion('all')
                break;
            case 'incomplete':
                document.getElementById('all').classList.remove('selected');
                document.getElementById('incomplete').classList.add('selected');
                document.getElementById('complete').classList.remove('selected');
                handleSetSelecion('incomplete')
                break;
            case 'complete':
                document.getElementById('all').classList.remove('selected');
                document.getElementById('incomplete').classList.remove('selected');
                document.getElementById('complete').classList.add('selected');
                handleSetSelecion('complete')
                break;
            default:
                document.getElementById('all').classList.add('selected');
                document.getElementById('incomplete').classList.remove('selected');
                document.getElementById('complete').classList.remove('selected');
                handleSetSelecion('all')
        };
    }, [handleSetSelecion, selected])

    setInterval(() => setTime(getHour()), new Date().getMinutes());

    useEffect(() => {
        const Lang = lang.title
        const res = getData(Lang);
        setDate(res);
    }, [lang.title])

    return (
        <HeaderStyle>
            <DateBox>
                <li>{date} - {time}</li>
                <li>{counter} {lang.activeTasks}</li>
            </DateBox>

            <NavBar>
                <li id="all" onClick={() => setSelected('all')}>{lang.allTask}</li>
                <li id="incomplete" onClick={() => setSelected('incomplete')}>{lang.inTask}</li>
                <li id="complete" onClick={() => setSelected('complete')}>{lang.comTask}</li>
            </NavBar>
        </HeaderStyle>
    );
}