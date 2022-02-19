
import {Route, Routes} from 'react-router-dom';
import './App.css';
import {Home} from './components/Home';
import {Login} from './components/Login';
import {Navbar} from './components/Navbar';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/home" element={<Home/>}></Route>
      </Routes>

   
    </div>
  );
}

export default App;
