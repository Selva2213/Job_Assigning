import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Loginpage from './Components/LoginPage';
import About from './Components/About';
import Help from './Components/Help';
import Loginusers from './Components/Loginusers';
import Loginas from './Components/Loginas';
import Skills from './Components/Skills';
import Errorpage from './Components/Errorpage';
import Simple from './Components/Simple';
import Assigning from './Components/Assigning';

function App() {
  return (
    <div >
    <Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path='/login' element={<Loginpage/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/help' element={<Help/>}></Route>
    <Route path='/loginas' element={<Loginas/>}></Route>
    <Route path='/loginusers' element={<Loginusers/>}></Route>
    <Route path='/skills' element={<Skills/>}></Route>
    <Route path='*' element={<Errorpage/>}></Route>
    <Route path='lkj' element={<Simple/>}></Route>
    <Route path='/assign' element={<Assigning/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
