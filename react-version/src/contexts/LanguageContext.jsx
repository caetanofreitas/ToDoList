import React, { createContext, useContext, useState, useEffect } from 'react';

import { ptBr, eng, es } from '../assets/lang';
const LanguageContext = createContext();

export default function LanguageProvider({ children }) {
    const [lang, setLang] = useState(JSON.parse(localStorage.getItem('lang')) || eng);

    function changeLang(sel) {
        let language = eng;
        switch (sel) {
            case 'pt':
                language = ptBr;
                break;
            case 'eng':
                language = eng;
                break;
            case 'es':
                language = es;
                break;
            default:

        }
        setLang(language);
    }

    useEffect(() => {
        const ptBtn = document.querySelector('p#ptBtn')
        const engBtn = document.querySelector('p#engBtn')
        const esBtn = document.querySelector('p#esBtn')
        switch (lang.title) {
            case 'ptBr':
                ptBtn.classList.add('selected')
                engBtn.classList.remove('selected')
                esBtn.classList.remove('selected')
                break;
            case 'eng':
                ptBtn.classList.remove('selected')
                engBtn.classList.add('selected')
                esBtn.classList.remove('selected')
                break;
            case 'es':
                ptBtn.classList.remove('selected')
                engBtn.classList.remove('selected')
                esBtn.classList.add('selected')
                break;
            default:
        }
    }, [lang.title])

    useEffect(() => localStorage.setItem('lang', JSON.stringify(lang)), [lang])

    return (
        <LanguageContext.Provider value={{ lang, changeLang }}>
            {children}
        </LanguageContext.Provider>
    );
};

export function useLang() {
    const context = useContext(LanguageContext);
    const { lang, changeLang } = context;
    return { lang, changeLang }
}