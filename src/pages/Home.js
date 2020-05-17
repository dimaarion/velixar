import React, { useEffect, useState } from 'react';
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
      </div>
    </div>
  );
}

export default Home;