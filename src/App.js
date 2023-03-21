import { Route,BrowserRouter as Router,Routes } from 'react-router-dom';
import './App.css';
import ActiveTabs from './components/ActiveTabs/ActiveTabs';
import Audio from './components/Audio/Audio';
import Hero from './components/Hero/Hero';
import Password from './components/Password/Password';
import DropDown from './components/DropDown/DropDown';
import NewTab from './components/NewTab/NewTab';
import AddCart from './components/AddCart/AddCart';

function App() {

  return (
      <Router>
      <Routes>
        <Route path='/' element={<Hero/>}/>
        <Route path='/password' element={<Password/>}/>
        <Route path='/audio' element={<Audio/>}/>
        <Route path='/activetabs' element={<ActiveTabs/>}/>
        <Route path='/dropdown' element={<DropDown/>} />
        <Route path='/newtab' element={<NewTab/>} />
        <Route path='/quantity' element={<AddCart/>} />
      </Routes>
      </Router>
  );
}

export default App;
