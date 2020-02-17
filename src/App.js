import React from 'react';
import {Route} from 'react-router-dom'
import './App.css';
import MenuLogoContainer from './menuLogo/MenuLogoContainer'
import TopPanelContainer from './topPanel/TopPanelContainer';
import SliderContainer from './slider/SliderContainer';
import CollectionContainer from './collection/CollectionContainer';
function App(props) {
  
  return (
    <div className="App">
    <TopPanelContainer/>
    <MenuLogoContainer/>
    <Route exact path="/" component = {SliderContainer}/>
    <Route exact path="/" component = {CollectionContainer}/>
    </div>
  );
}

export default App;
