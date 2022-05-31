
import './App.css';
import AddMovies from './components/AddMovies';
import EditMovies from './components/EditMovies';
import ListMovies from './components/ListMovies';
import RealTimeMovies from './components/RealTimeMovies';

function App() {

  
  return (
    <div className="App">
      <header className="App-header">
          <h3>Firebase Firestore App</h3>
        <RealTimeMovies/>
        <EditMovies/>
        <AddMovies />
      </header>
      <main>
      </main>
    </div>
  );
}

export default App;
