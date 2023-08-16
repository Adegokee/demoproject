
import './App.css';
import MovieDemo from './Movie';
import Banner from './components/Banner';
import Form from './components/Form';
import List from './components/List';
import React, {useState} from 'react';

function App() {
  const [theme, setTheme] = useState('dark');

  const  colorButton= () => {
    setTheme(theme === 'dark' ? 'light': 'dark');

  }
  return (
  <div className={theme}>

      <MovieDemo>
        <button onClick={colorButton}>{theme === 'dark' ? 'light' : 'dark'}</button>
      <Form />
      <Banner />
    <List />
    </MovieDemo>
  </div>
  );
}

export default App;
