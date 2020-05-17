import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom'
import {getMenu } from './redux/actions'
import './App.css';
import Home from './pages/Home';
import Mywork from './pages/Mywork';
import Err from './pages/Err';
import MenuLogoContainer from './components/menuLogo/MenuLogoContainer';
import MyFoto from './pages/MyFoto';
import Contact from './pages/Contact';


function App() {
  const [menu, setMenu] = useState({ data: [], status: 0 });
  
  useEffect(() => {
    getMenu(setMenu);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
     <MenuLogoContainer menu={menu.data}/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/moi-raboti" component={Mywork} />
        <Route path="/moi-foto" component={MyFoto} />
        <Route path="/contact" component={Contact} />
        <Route component={Err} />
      </Switch>
    </div>

  );
}



export default App;
