import React, { useState } from 'react';
import './App.css';
import TodoList from './components/Todolist'
import ThemeSwitcher from './components/ThemeSwitcher'
import Aux from './components/hoc'
import {ThemeProvider} from 'styled-components'

import * as themes from './components/styles/themes'
import ThemeContext from './components/styles/themes/context'

function App() {

   const [theme, setTheme] = useState(themes.dark)

   const toggleTheme = () => {
      setTheme(theme === themes.dark ? themes.light : themes.dark)
   }

   return (
      <Aux>
         <ThemeContext.Provider value={theme}>
            <ThemeSwitcher toggleTheme={toggleTheme}></ThemeSwitcher>
            <ThemeContext.Consumer>
               {theme =>(
                  <ThemeProvider theme={theme} ><TodoList></TodoList></ThemeProvider>
               )}
            </ThemeContext.Consumer>
         </ThemeContext.Provider>
      </Aux>
   );
}

export default App;
