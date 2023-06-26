import './App.css';
import { Application } from './components/Application';
import Skills from './components/Skills';

function App() {
  const skills = ['plumbing', 'wiring', 'cleaning']
  return (
    <div className="App">
      {/* <Application /> */}
      <Skills skills={skills} />
    </div>
  );
}

export default App;
