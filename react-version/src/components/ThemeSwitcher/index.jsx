import React from 'react';

import { MdBrightness6 } from 'react-icons/md';
import { Switcher } from '../../assets/styles/ThemeSwitcher';

export default function ThemeSwitcher({ changeTheme }) {
    return (
        <Switcher onClick={() => changeTheme()} ><MdBrightness6 size={20} /></Switcher>
    );
}