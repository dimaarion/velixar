import React, { useEffect, useState } from 'react';
import { getImage, getImageCount } from '../redux/actions';
import Gallery from '../components/gallery/Gallery';

function Mywork(props) {
  const [dataImages, setDataImages] = useState({ data: [], status: 0 });
  const [countImg, setCountImg] = useState({ data: [], status: 0 });
  const [states, setStates] = useState({ count: numCount() });
  

  function numCount(a = 9) {
    return a;
  }
  useEffect(() => {
    getImageCount(setCountImg);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    getImage(states.count,setDataImages);
  }, [states.count]);
  return (
   
    <div className="container-fluid" style={{paddingTop:'60px'}}>
    <h1 className = "text-center">Мои работы</h1>
    <Gallery dataImages={dataImages.data} countImg={countImg.data} />
        {
          (states.count < countImg.data) ?
            <button onClick={() => setStates({ count: states.count + numCount() })} type="button" className="btn btn-primary btn-lg btn-block">Загрузить еще</button>
            : ''
        }
    </div>
  );
}


export default Mywork;
