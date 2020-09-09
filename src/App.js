import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Route, Switch } from 'react-router-dom'
import { inital_base_url } from './redux/actions'
import './App.css';
import Home from './pages/Home';
import Mywork from './pages/Mywork';
import Err from './pages/Err';
import MenuLogoContainer from './components/menuLogo/MenuLogoContainer';


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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
     <MenuLogoContainer menu={menu.data}/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/moi-raboti" component={Mywork} />
        <Route component={Err} />
      </Switch>
    </div>

  );
}



export default App;
