import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import representativeImage from './assets/representativa.jpg'; // Importa la imatge

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      
      <section className="project-info">
        <h2>Desplegament duna aplicació web a Vercel mitjançant GitHub</h2>
        <p><strong>Autor:</strong> [Guillem]</p>
        <p>Este es un proyecto creado con Vite y React para explorar el desarrollo rápido de aplicaciones web.</p>
      </section>

      <section className="image-section">
        <img src={representativeImage} alt="Imatge representativa" className="representative-image" />
      </section>
    </>
  );
}

export default App;
