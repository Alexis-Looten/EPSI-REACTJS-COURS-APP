// import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Reference from './pages/Reference';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import ThemeContext from './context/ThemeContext';
import { useState } from 'react';

import {Routes, Route, Link} from 'react-router-dom';

function App() {

  const [theme, setTheme] = useState('light');

  const Toggle = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <ThemeContext.Provider value={theme}>
      <button onClick={Toggle}>Toggle Theme</button>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/reference">Reference</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      <Routes>
        <Route path="/" element={<Home name="Dio" age="21" color="red" sizeText="36">Un truc là</Home>}/>
        <Route path="/reference" element={<Reference/>}/>
        <Route path="/reference/:id" element={<Reference/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </ThemeContext.Provider>
  );
}

export default App;
