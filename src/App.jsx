
import {Route, Routes} from 'react-router-dom';
import './App.css';
import {Home} from './components/Home';
import {Login} from './components/Login';
import {Medicine} from './components/Medicine';
import {Navbar} from './components/Navbar';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />}></Route>
        
        <Route path="/home" element={<Home />}></Route>
        <Route path="/home/:medicine" element={<Medicine />}></Route>
        
      </Routes>

   
    </div>
  );
}

export default App;
