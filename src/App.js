import { Route,BrowserRouter as Router,Routes } from 'react-router-dom';
import './App.css';
import ActiveTabs from './components/ActiveTabs/ActiveTabs';
import Audio from './components/Audio/Audio';
import Hero from './components/Hero/Hero';
import Password from './components/Password/Password';
import DropDown from './components/DropDown/DropDown';
import NewTab from './components/NewTab/NewTab';
import AddCart from './components/AddCart/AddCart';
import Modal from './components/Modal/Modal';
import Mode from './components/Mode/Mode';
import Select from './components/Select/Select';

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
        <Route path='/modal' element={<Modal/>} />
        <Route path='/mode' element={<Mode/>} />
        <Route path='/select' element={<Select/>} />
      </Routes>
      </Router>
  );
}

export default App;
