import './App.css';

import Salutation from './components/Salutation/Salutation';
import Skills from './components/Skills/Skills';
import Concepts from './components/Concepts/Concepts';
import About from './components/About/About';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div className="App">
        <Salutation></Salutation>
        <Skills></Skills>
        <Concepts></Concepts>
        <About></About>
        <Projects></Projects>
    </div>
  );
}

export default App;
