import React from 'react';
import './index.css';

import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app">

      {/* Header */}
      <header className="header">
        <h1>Carl Dalasen</h1>
        <p>Web Developer</p>
      </header>

      {/* Content */}
      <main className="container">
        <AboutMe />
        <Education />
        <Experience />
        <Skills />
        <Contact />
      </main>

    </div>
  );
}

export default App;