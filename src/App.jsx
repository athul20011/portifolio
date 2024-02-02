import './App.css';
import { useState } from 'react';
import { Routes,Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer'
import Education from './components/Education';
import Skills from './components/Skills';
import HomePage from './Page/HomePage';
import Contact from './Page/Contact';
import Home from './components/Home';
import About from './components/About';
import Project from './components/projectSection/Project';
function App() {
  const[mode,setMode]  =useState(false);

  return (
    <div className="App">
      <header>
        <Header mode={mode}  setMode={setMode} />
        <Routes>
          <Route path='/'element={<HomePage mode={mode} />} />
          <Route path='contact'element={<Contact mode={mode}  />} />
          <Route path='home'element={<Home/>} />
          <Route path='about'element={<About/>} />
          <Route path='education'element={<Education/>} />
          <Route path='skill'element={<Skills/>} />
          <Route path='project'element={<Project/>} />

        </Routes>
      </header>
<Footer mode={mode} />
    </div>
  );
}

export default App;
