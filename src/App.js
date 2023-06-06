import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Hello Dojo!
        </h1>
        <h4>
          Things I need to do:
        </h4>
        <h5>*Learn React</h5>
        <h5>*Climb Mt. Everest</h5>
        <h5>*Run a Marathon</h5>
        <h5>*Feed the dogs</h5>
      </header>
    </div>
  );
}

export default App;

