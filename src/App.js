import Salutation from './components/Salutation/Salutation';
import Skills from './components/Skills/Skills';
import Concepts from './components/Concepts/Concepts';
import About from './components/About/About';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div className="text-center px-5 lg:px-20">
        <Salutation />
        <Skills />
        <Concepts />
        <About />
        <Projects/>
    </div>
  );
}

export default App;
