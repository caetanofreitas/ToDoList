import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import { light, dark } from './assets/themes';

import { GlobalStyle } from './assets/GlobalStyle';

import ListProvider from './contexts/ListContext';
import LanguageProvider from './contexts/LanguageContext';

import Header from './components/Header';
import InputContainer from './components/InputContainer';
import ListContainer from './components/ListContainer';
import ThemeSwitcher from './components/ThemeSwitcher';
import LangSwitcher from './components/LangSwitcher';

export default function App() {
  const [theme, setTheme] = useState(JSON.parse(localStorage.getItem('theme')) || dark);

  function changeTheme() {
    setTheme(theme.title === 'dark' ? light : dark);
  }

  useEffect(() => localStorage.setItem('theme', JSON.stringify(theme)), [theme])

  return (
    <ThemeProvider theme={theme}>
      <LanguageProvider>
        <ListProvider>
          <GlobalStyle />
          <Header />
          <InputContainer />
          <ListContainer />
        </ListProvider>
        <LangSwitcher />
      </LanguageProvider>
      <ThemeSwitcher changeTheme={changeTheme} />
    </ThemeProvider>
  );
}
