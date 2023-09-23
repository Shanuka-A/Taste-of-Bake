import logo from './logo.svg';
import './App.css';
import bootsrtap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Components/Navbar';
import HomePg from './screens/HomePg';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HomePg/>
    </div>
  );
}

export default App;
