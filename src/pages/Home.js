import React, { useEffect, useState } from 'react';
<<<<<<< HEAD
import { getImage, getImageCount } from '../redux/actions';
import Slider from '../components/slider/Slider';
import '../style/home.css';
import Gallery from '../components/gallery/Gallery';


function Home(props) {
  const [dataImages, setDataImages] = useState({ data: [], status: 0 });
  const [countImg, setCountImg] = useState({ data: [], status: 0 });
  const [states, setStates] = useState({ count: numCount() });

  function numCount(a = 6) {
    return a;
  }

  useEffect(() => {
    getImageCount(setCountImg);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  useEffect(() => {
    getImage(states.count, setDataImages);
  }, [states.count]);

  return (
    <div className="container-fluid">
      <Slider dataImages={dataImages.data} status={dataImages.status} />
      <div className="home" style={{ marginTop: 0 + 'px', zIndex: 2, position: 'relative', backgroundColor: 'rgb(224, 232, 234)', minHeight: window.innerHeight + 'px' }}>
        <h2 className="text-center" style={{ paddingTop: '50px', paddingBottom: '50px' }}>Мои работы</h2>
        <Gallery dataImages={dataImages.data} countImg={countImg.data} />
        {
          (states.count < countImg.data) ?
            <button onClick={() => setStates({ count: states.count + numCount() })} type="button" className="btn btn-primary btn-lg btn-block">Загрузить еще</button>
            : ''
        }
=======
import {getImage} from '../redux/actions';
import Slider from '../components/slider/Slider';
import '../style/home.css';

import Douland from '../components/douland/Douland';

import Mywork from './Mywork';
import MyFoto from './MyFoto';

function Home(props) {
  const [dataImages, setDataImages] = useState({ data: [], status: 0 });
  useEffect(() => {
    getImage(setDataImages);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  

  return (
    <div className="container-fluid">
    {(dataImages.status === 200 )?
      <Slider dataImages={dataImages.data} status={dataImages.status} />
      :
      <Douland/>
    } 
      <div className="home" style={{ marginTop: 0 + 'px', zIndex: 2, position: 'relative', backgroundColor: 'rgb(224, 232, 234)', minHeight: window.innerHeight + 'px' }}>
        <Mywork/>
        <MyFoto/>
>>>>>>> f32fc0c0e0130ee08e0a7e32a11b52c5ab9dc931
      </div>
    </div>
  );
}

export default Home;