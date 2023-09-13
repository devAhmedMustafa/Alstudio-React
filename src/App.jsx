import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from "./pages/Register";
import BackGround from './components/Main-Backround';
import Login from './pages/Login';
import Home from './pages/Home';
import AddDesign from './pages/AddDesign';
import Profile from './pages/Profile';
import Search from './pages/Search';
import Favourites from './pages/Favourites';
import axios from 'axios';
import Loader from './components/Loader';
import { BASE_URL } from './constants/BASE_BACKEND';

axios.defaults.baseURL = BASE_URL;

function App() {

  return (
    <div className="main-parent">
      <BackGround/>
      <Loader/>
      <div className="holder">
        <BrowserRouter>
          <Routes>
            <Route path='/' Component={Home}/>
            <Route path='/signup' Component={Register}/>
            <Route path='/login' Component={Login}/>
            <Route path='/add_design' Component={AddDesign}/>
            <Route path='/profile/:username' Component={Profile}/>
            <Route path='/search' Component={Search}/>
            <Route path='/favourites' Component={Favourites}/>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
