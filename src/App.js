import './App.css';
import Navigation from './Components/Navigation/Navigation';
import InfoViewer from './Components/InfoViewer/InfoViewer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Navigation/>
      </header>
      <main>
        <InfoViewer />
      </main>
    </div>
  );
}

export default App;
