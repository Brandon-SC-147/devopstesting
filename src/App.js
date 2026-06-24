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

          Learn more on React CI/CD Pipeline, S15
          <a href="https://www.esan.edu.pe/">learn react</a>
          <p>Prueba de SOftware</p>
      </header>
    </div>
  );
}
// The App component is a simple React functional component that serves as the main entry point for the application. It displays a logo, a description of the project, and a link to learn more about React CI/CD pipelines. The component is styled using an external CSS file and is exported as the default export of the module, allowing it to be imported and used in other parts of the application.
export default App;
