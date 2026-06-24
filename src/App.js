import logo from './logo.svg';
import './App.css';
// This is a React functional component that renders the main application UI. It includes a header with a logo, a description, and links for further learning. The component is exported as the default export of the module.
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          DevOps Testing  <code>CI-CD</code> ESAN Project
        </p>

          Learn more on React CI/CD Pipeline
          <a href="https://www.esan.edu.pe/">learn react</a>
          <p>Prueba de SOftware</p>
      </header>
    </div>
  );
}

export default App;
