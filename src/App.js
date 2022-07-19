import { NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home'
import Monster from './components/Monster';
import Monsters from './components/Monsters';
import Armors from './components/Armors'
import Weapons from './components/Weapons'
import About from './components/About'
import NoMatch from './components/NoMatch';

function App() {
  return (
    <div className="App">

    <div className='navbar'>
      <NavLink className="NavLink" to={"/"}>Home</NavLink>
      <NavLink className="NavLink" to={"/monsters"}>Monsters</NavLink>
      <NavLink className="NavLink" to={"/armor"}>Armors</NavLink>
      <NavLink className="NavLink" to={"/weapon"}>Weapons</NavLink>
      <NavLink className="NavLink" to={"/about"}>About</NavLink>
    </div>


    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/monsters' element={<Monsters />} />
      <Route path='/monsters/:monster_id' element={<Monster />} />
      <Route path='/armor' element={<Armors />}/>

      <Route path='/weapon' element={< Weapons />} />
      
      <Route path='/about' element={<About />} />
      <Route path='*' element={<NoMatch />}/>
    </Routes>
    
    </div>
  );
}

export default App;
