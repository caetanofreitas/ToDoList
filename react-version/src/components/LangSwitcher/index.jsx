import React from 'react';

import { MdTranslate, MdCancel } from 'react-icons/md';
import { Switcher, LangBox } from '../../assets/styles/LangSwitcher';
import { useLang } from '../../contexts/LanguageContext';

import br from '../../assets/images/brasil.svg';
import eng from '../../assets/images/bandeira.svg';
import es from '../../assets/images/espanha.svg';

export default function LangSwitcher() {
    const { changeLang } = useLang();
    const [isActive, setIsActive] = React.useState(false);

    function toggleModal() {
        const modal = document.getElementById('langModal');
        modal.style.display === 'flex' ?
            modal.style.display = 'none' :
            modal.style.display = 'flex'
    }

    function toggleModalOf() {
        if (isActive) {
            document.getElementById('langModal').style.display = 'none';
            setIsActive(false);
        }
    }
    return (
        <div id="langChanger">
            <LangBox id="langModal" onMouseLeave={() => setTimeout(() => toggleModalOf(), 1000)} >
                <p onClick={() => changeLang('pt')} id="ptBtn">
                    <img src={br} alt="ptBr" />
                    Pt
                </p>

                <p onClick={() => changeLang('eng')} id="engBtn">
                    <img src={eng} alt="Eng" />
                    Eng
                </p>

                <p onClick={() => changeLang('es')} id="esBtn">
                    <img src={es} alt="Es" />
                    Es
                </p>
            </LangBox>

            <Switcher>
                {
                    isActive ?
                        <MdCancel onClick={() => {
                            setIsActive(false);
                            toggleModal();
                        }} size={20} /> :

                        <MdTranslate onClick={() => {
                            setIsActive(true)
                            toggleModal();
                        }} size={20} className="close" />
                }
            </Switcher>
        </div>
    );
}