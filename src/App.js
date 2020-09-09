import React, { useEffect, useState } from 'react';
<<<<<<< HEAD
import axios from 'axios';
import { Route, Switch } from 'react-router-dom'
import { inital_base_url } from './redux/actions'
=======
import { Route, Switch } from 'react-router-dom'
import {getMenu } from './redux/actions'
>>>>>>> f32fc0c0e0130ee08e0a7e32a11b52c5ab9dc931
import './App.css';
import Home from './pages/Home';
import Mywork from './pages/Mywork';
import Err from './pages/Err';
import MenuLogoContainer from './components/menuLogo/MenuLogoContainer';
<<<<<<< HEAD


function App(props) {
  const [menu, setMenu] = useState({ data: [], status: 0 });
  function getMenu() {
    axios.get(inital_base_url + '/api/getdb/menu.php')
      .then(function (response) {
        setMenu({ data: response.data, status: response.status });
         
      })
  }
  useEffect(() => {
    getMenu();
=======
import MyFoto from './pages/MyFoto';
import Contact from './pages/Contact';


function App() {
  const [menu, setMenu] = useState({ data: [], status: 0 });
  
  useEffect(() => {
    getMenu(setMenu);
>>>>>>> f32fc0c0e0130ee08e0a7e32a11b52c5ab9dc931
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
     <MenuLogoContainer menu={menu.data}/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/moi-raboti" component={Mywork} />
<<<<<<< HEAD
=======
        <Route path="/moi-foto" component={MyFoto} />
        <Route path="/contact" component={Contact} />
>>>>>>> f32fc0c0e0130ee08e0a7e32a11b52c5ab9dc931
        <Route component={Err} />
      </Switch>
    </div>

  );
}



export default App;
